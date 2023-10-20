import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const ContactModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Contact" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Proudly developed by <a href="https://yusuf.kaka.co.za">Yusuf Kaka - https://yusuf.kaka.co.za</a>
      </p>
    </BaseModal>
  )
}
