import clsx from 'clsx'
import { type FormEvent } from 'react'

interface LabelProps {
  labelName: string
  text: string
  type: string
  rule?: string
  isText?: boolean
  isImg?: boolean
  inputValue: string | number
  placeholder: string
  handleChange: (e: FormEvent<HTMLInputElement>) => void
}

export const Label = (props: LabelProps): JSX.Element => {
  const { labelName, text, type, isText, handleChange, isImg, rule, inputValue, placeholder } = props
  return (
    <label
      htmlFor={labelName}
      className={clsx(
        (isText ?? false) && 'flex flex-col w-[230px] sm:w-[300px] font-bold relative',
        (isImg ?? false) && 'flex flex-col w-[230px] sm:w-[300px] font-bold relative'
      )}
    >
      <p className='absolute -top-4 bg-white left-0 font-semibold px-3 text-sm' >{text}</p>
      <input
        className={clsx(
          (isText ?? false) &&
            'border border-gray-300 rounded-lg outline-none px-2 py-2 font-normal',
          (isImg ?? false) && ' rounded-lg outline-none px-2 py-2 font-normal'

        )}
        type={type}
        name={labelName}
        onChange={handleChange}
        placeholder={placeholder}
        required={true}
        id={labelName}
        value={inputValue}
      />
      {
        inputValue === ''
          ? (
          <p className='absolute -bottom-3 right-0 bg-white text-red-400'>Required</p>
            )
          : null
          }
          <p className='font-bold text-blue-500 text-sm absolute -bottom-5'>{rule}</p>
    </label>
  )
}
