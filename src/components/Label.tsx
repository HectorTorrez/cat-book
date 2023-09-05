import clsx from 'clsx'
import { type FormEvent } from 'react'

interface LabelProps {
  labelName: string
  text: string
  type: string
  rule?: string
  isText?: boolean
  isImg?: boolean
  // inputValue: string
  handleChange: (e: FormEvent<HTMLInputElement>) => void
}

export const Label = (props: LabelProps): JSX.Element => {
  const { labelName, text, type, isText, handleChange, isImg, rule } = props
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
        required
        id={labelName}
        autoComplete='on'
        // value={inputValue}
      />
      <p className='font-bold text-blue-500 text-sm'>{rule}</p>
    </label>
  )
}
