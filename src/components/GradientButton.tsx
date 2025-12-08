import { twMerge } from 'tailwind-merge'

interface Props {
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
  onClick,
  href,
  noBlankTarget = false,
  disabled,
}: Props) => {
  const pointerEvents = disabled ? 'pointer-events-none' : ''
  const linkProps = noBlankTarget
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' }

  return (
    <button
      className={twMerge(`
        text-white font-semibold text-lg self-start bg-text-gradient p-[3px] rounded-full button transition
         overflow-clip relative group ${pointerEvents} ${className}
      `)}
      {...{ onClick, disabled }}
    >
      {href && (
        <a
          href={href}
          className='size-full absolute z-10 left-0 top-0 rounded-full'
          {...linkProps}
        />
      )}

      <div className='bg-black/85 flex gap-2 items-center px-12 py-3 rounded-full'>
        {children}
      </div>

      {/* Gradient */}
      <div className='opacity-60 group-hover:opacity-100 transition bg-linear-to-r from-[#aa0bff] to-[#549eff] aspect-square w-[150%] absolute top-1/2 left-1/2 -translate-1/2 -z-10 animate-spin' />
    </button>
  )
}
