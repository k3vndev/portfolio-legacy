import { ContactFormField } from './ContactFormField'

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form
      className='project-card hover:border-[rgba(85,85,85,0.5)] rounded-xl px-8 py-12 mb-24 max-w-3xl'
      onSubmit={handleSubmit}
    >
      <div className='flex gap-8'>
        <ContactFormField label='Name' name='name' />
        <ContactFormField label='Email' name='email' />
      </div>
      <ContactFormField label='Message' name='message' textarea />
    </form>
  )
}
