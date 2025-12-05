import { sendMail } from '@/utils/sendMail'
import { EVENTS } from '@consts'
import { useEffect, useRef, useState } from 'react'
import { SubmitButton } from './SubmitButton'
import { TextField } from './TextField'

export const ContactForm = () => {
  const [emailWasSent, setEmailWasSent] = useState(false)
  const emailWasSentTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [error, setError] = useState<string | null>(null)
  const errorTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [visibleError, setVisibleError] = useState<VisibleError>({
    message: '',
    isVisible: false,
  })

  useEffect(() => {
    // Show or hide the error message based on the error state
    // Visible error keeps the message even after error is cleared for animation purposes

    if (error) {
      setVisibleError({ message: error, isVisible: true })
      return
    }

    if (!error && visibleError.message) {
      setVisibleError((v) => ({ ...v, isVisible: false }))
    }
  }, [error])

  const clearError = () => {
    setError(null)
    errorTimeoutRef.current && clearTimeout(errorTimeoutRef.current)
  }

  const displayError = (err: string) => {
    console.log('Displaying error', err)
    setError(err)

    errorTimeoutRef.current && clearTimeout(errorTimeoutRef.current)
    errorTimeoutRef.current = setTimeout(() => {
      setError(null)
    }, 5000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // Extract form values
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    // Basic validations
    if (!name || !email || !message) {
      displayError('Some fields are missing.')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.toString())) {
      displayError('The email address is invalid.')
      return
    }

    // If all validations pass, clear any existing errors
    clearError()

    // Dispatch form submit event
    document.dispatchEvent(
      new CustomEvent(EVENTS.FORM_SUBMIT, { detail: { name, email, message } })
    )
    sendMail(name.toString(), email.toString(), message.toString())
    setEmailWasSent(true)

    emailWasSentTimeoutRef.current &&
      clearTimeout(emailWasSentTimeoutRef.current)
    emailWasSentTimeoutRef.current = setTimeout(() => {
      setEmailWasSent(false)
    }, 3000)
  }

  useEffect(
    () => () => {
      // Cleanup timeouts on unmount
      emailWasSentTimeoutRef.current &&
        clearTimeout(emailWasSentTimeoutRef.current)
      errorTimeoutRef.current && clearTimeout(errorTimeoutRef.current)
    },
    []
  )

  const errorVisibilityClass = visibleError.isVisible
    ? 'opacity-100'
    : 'opacity-0'

  return (
    <form
      className='project-card hover:border-[rgba(85,85,85,0.5)] rounded-xl mb-24 w-full cursor-default flex overflow-clip gap-8'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col w-full px-8 py-12'>
        <div className='flex gap-8'>
          <TextField label='Name' name='name' />
          <TextField label='Email' name='email' />
        </div>
        <TextField label='Message' name='message' textarea />

        <div className='flex items-center gap-4'>
          <SubmitButton emailWasSent={emailWasSent} />

          {/* Error handling */}
          <span
            className={`transition-opacity duration-300 text-red-400/90 ${errorVisibilityClass}`}
          >
            ✕ {visibleError.message}
          </span>
        </div>
      </div>

      <img
        className='object-cover w-lg saturate-150 scale-150 hidden xl:block cursor-default -z-10'
        src='/projects/pixi-paint/carousel-1.webp'
        alt='Contact form image'
        style={{
          maskImage: 'linear-gradient(to left, white 0%, transparent 100%)',
        }}
      />
    </form>
  )
}

interface VisibleError {
  message: string
  isVisible: boolean
}
