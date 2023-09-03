import clsx from 'clsx'

interface ButtonProps {
  isAdd?: boolean
  isDelete?: boolean
  isClose?: boolean
  text: string | React.ReactNode
  handleClick: () => void
  handleEsc?: () => void
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { isAdd, isDelete, text, handleClick, isClose, handleEsc } = props
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <button
      className={clsx(
        (isAdd ?? false) && 'bg-blue-400 text-white px-5 py-1 rounded-sm',
        (isDelete ?? false) && 'bg-red-400 text-white px-5 py-1 rounded-sm',
        (isClose ?? false) && 'bg-transparent text-red-400 px-5 py-1 rounded-sm'
      )}
      onClick={handleClick}
      onKeyDown={handleEsc}
    >
      {text}
    </button>
  )
}
