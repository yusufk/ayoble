import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const ContactModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Contact us" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Fill in the form below to contact the developer:
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        <form action="mailto:yusufk@mailbox.co.za" method="POST" encType="multipart/form-data" name="EmailForm">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">Submit</button>
        </form>
      </p>
    </BaseModal>
  )
}
