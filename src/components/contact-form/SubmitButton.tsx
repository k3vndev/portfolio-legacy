import { CheckIcon, MailIcon } from '@@/icons'

interface Props {
  emailWasSent: boolean
}

export const SubmitButton = ({ emailWasSent }: Props) => (
  <button
    className={`
      px-16 py-2 rounded-full bg-black/90 border-white/15 border flex items-center gap-2
      button justify-center text-white text-lg font-poppins font-bold
    `}
    type='submit'
    disabled={emailWasSent}
  >
    {emailWasSent ? (
      <>
        <CheckIcon />
        <span>Message Sent!</span>
      </>
    ) : (
      <>
        <MailIcon />
        <span>Send Message</span>
      </>
    )}
  </button>
)
