import clsx from 'clsx'

interface ButtonProps {
  isAdd?: boolean
  isDelete?: boolean
  isClose?: boolean
  text: string | React.ReactNode
  handleClick?: (args: any) => any
  handleEsc?: () => void
  isEmpty?: boolean
  type: 'button' | 'reset' | 'submit'
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { isAdd, isDelete, text, handleClick, isClose, handleEsc, type, isEmpty } = props
  return (

    <button
      className={clsx(
        (isAdd ?? false) && 'bg-blue-400 text-white px-5 py-1 rounded-md font-bold',
        (isDelete ?? false) && 'bg-red-400 text-white px-5 py-1 rounded-md font-bold',
        (isClose ?? false) && 'bg-transparent text-red-400 px-5 py-1 rounded-md font-bold'
      )}
      onClick={handleClick}
      onKeyDown={handleEsc}
      type={type}
      disabled={isEmpty}
    >
      {text}
    </button>
  )
}
