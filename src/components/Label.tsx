import clsx from 'clsx'
import { type FormEvent } from 'react'

interface LabelProps {
  labelName: string
  text: string
  type: string
  isText?: boolean
  isImg?: boolean
  handleChange: (e: FormEvent<HTMLInputElement>) => void
}

export const Label = (props: LabelProps): JSX.Element => {
  const { labelName, text, type, isText, handleChange, isImg } = props
  return (
    <label
      htmlFor={labelName}
      className={clsx(
        (isText ?? false) && 'flex flex-col w-[230px] md:w-[300px] font-bold',
        (isImg ?? false) && 'flex flex-col w-[230px] md:w-[300px] font-bold'
      )}
    >
      {text}
      <input
        className={clsx(
          (isText ?? false) &&
            'border border-black rounded-lg outline-none px-2 py-2 font-normal',
          (isImg ?? false) && ' rounded-lg outline-none px-2 py-2 font-normal'
        )}
        type={type}
        name={labelName}
        onChange={handleChange}
        placeholder={`Write their ${text}`}
      />
    </label>
  )
}
