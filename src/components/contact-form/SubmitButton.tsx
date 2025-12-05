import { GradientButton } from '@@/GradientButton'
import { CheckIcon, MailIcon } from '@@/icons'

interface Props {
  emailWasSent: boolean
}

export const SubmitButton = ({ emailWasSent }: Props) => (
  <GradientButton disabled={emailWasSent}>
    {emailWasSent ? (
      <>
        <CheckIcon />
        <span>Message sent!</span>
      </>
    ) : (
      <>
        <MailIcon />
        <span>Send message</span>
      </>
    )}
  </GradientButton>
)
