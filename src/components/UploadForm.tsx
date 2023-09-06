import { type FormEvent, useState } from 'react'
import { Button } from './Button'
import { Label } from './Label'
import { Close } from './Icons'

interface UploadFormProps {
  handleActiveForm: (boolean: boolean) => void
  handleEsc: any
  isUploadform?: boolean
}

export const UploadForm = ({
  handleActiveForm,
  handleEsc,
  isUploadform
}: UploadFormProps): JSX.Element => {
  const [itemForm, setItemForm] = useState({
    name: '',
    age: '',
    favoriteFood: '',
    funFact: '',
    image: File
  })

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget
    setItemForm({
      ...itemForm,
      [name]: value
    })
  }

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()

    try {
      void fetch('http://localhost:3000/catBook', {
        method: 'POST',
        body: JSON.stringify(itemForm),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
    } catch (error) {
      console.error(error)
    } finally {
      handleActiveForm(false)
    }
  }

  return (
    <section className="flex flex-col  absolute -top-2  py-10  w-4/5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg ">
      <section className="absolute top-0 right-0 mt-3 ">
        <Button
          text={<Close />}
          isClose
          handleClick={() => { handleActiveForm(false) }}
          handleEsc={() => handleEsc}
        />
      </section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 items-center"
        action="#"
      >
        <Label
          handleChange={handleChange}
          labelName="name"
          text="Cat Name"
          type="text"
          isText

        />
        <Label
          handleChange={handleChange}
          labelName="age"
          text="Age"
          type="text"
          isText
        />
        <Label
          handleChange={handleChange}
          labelName="favoriteFood"
          text="Favorite Food"
          type="text"
          isText
        />
        <Label
          handleChange={handleChange}
          labelName="funFact"
          text="Fun Fact"
          type="text"
          isText
        />

        {
          (isUploadform ?? false)
            ? (
             <Label
          handleChange={handleChange}
          labelName="image"
          text="Image"
          type="text"
          isText
          rule = 'Add a valid URL'
        />
              )
            : null
        }

        <footer>
          <Button text="Submit" isAdd />
        </footer>
      </form>
    </section>
  )
}
