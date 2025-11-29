import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { CheckIcon, CopyIcon } from './icons'

interface Props {
  className?: string
  children: React.ReactNode
}

export const CopyText = ({ className = '', children }: Props) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      const { value } = (children as any).props
      if (typeof value !== 'string') return

      await navigator.clipboard.writeText(value)

      setCopied(true)
      setTimeout(() => setCopied(false), 999)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <span
      className={twMerge(
        `inline-flex items-center gap-1.5 hover:brightness-120 transition active:scale-97 active:brightness-90 cursor-pointer ${className}`
      )}
      onClick={handleCopy}
      title='Copy to clipboard'
    >
      {children}
      {copied ? <CheckIcon /> : <CopyIcon />}
    </span>
  )
}
