import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string
  children: React.ReactNode
  onClick?: () => void
  href?: string
  noBlankTarget?: boolean
  disabled?: boolean
}

export const GradientButton = ({
  className = '',
  children,
  href,
  noBlankTarget = false,
  ...props
}: Props) => {
  const pointerEvents = props.disabled ? 'pointer-events-none' : ''
  const linkProps = noBlankTarget
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' }

  return (
    <button
      className={twMerge(`
        self-start bg-text-gradient p-[3px] rounded-full button transition
         overflow-clip relative group ${pointerEvents} ${className}
      `)}
      {...props}
    >
      {href && (
        <a
          href={href}
          className='size-full absolute z-10 left-0 top-0 rounded-full'
          {...linkProps}
        />
      )}

      <div className='bg-black/85 flex gap-2 items-center px-12 py-3 rounded-full text-white font-semibold sm:text-lg text-base text-nowrap sm:[&>svg]:size-6 [&>svg]:size-5'>
        {children}
      </div>

      {/* Gradient */}
      <div className='opacity-75 group-hover:opacity-100 transition bg-linear-to-r from-[#aa0bff] to-[#549eff] aspect-square w-[150%] absolute top-1/2 left-1/2 -translate-1/2 -z-10 animate-spin' />
    </button>
  )
}
