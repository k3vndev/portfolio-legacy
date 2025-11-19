type AstroElement = (_props: Record<string, any>) => any

export type Tecnology = {
  label: string
  icon: AstroElement
}

export interface Project {
  name: string
  overview: string
  description: string
  features: string[]
  myRole: string[]

  gridImgs?: string[]
  carouselImgs?: string[]

  mainTechnologies: Tecnology[]
  extraTechnologies?: Tecnology[]

  starred?: boolean
  code: string
  preview: string
}

export type MailState = 'initial' | 'sending' | 'sent' | 'error'
