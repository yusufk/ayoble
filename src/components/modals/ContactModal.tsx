import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const ContactModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Contact us" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        If you are experiencing any issues with the game, please contact us at yusufk@mailbox.co.za
      </p>
    </BaseModal>
  )
}
