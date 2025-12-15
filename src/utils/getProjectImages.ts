import fs from 'node:fs/promises'
import path from 'node:path'
import { toKebabCase } from './toKebabCase'

type ImagesType = 'carousel' | 'starred'

export const getProjectImages = async (projectName: string, imagesType: ImagesType) => {
  const projectSlug = toKebabCase(projectName)
  const directoryPath = path.join(process.cwd(), 'public', 'projects', projectSlug)

  const files = await fs.readdir(directoryPath, { withFileTypes: true })
  const imagePaths: string[] = []

  for (const file of files) {
    const [imageType] = file.name.split('-')

    if (imageType === imagesType) {
      const fullPath = `/projects/${projectSlug}/${file.name}`
      imagePaths.push(fullPath)
    }
  }
  return imagePaths
}
