import { type FormEvent, useState, useEffect } from 'react'
import { Button } from './Button'
import { Label } from './Label'
import { Close } from './Icons'
import { type Cat } from '../types/CatTypes'
import { Alert } from './Alert'

interface UploadFormProps {
  handleActiveForm: (boolean: boolean) => void
  handleEsc: any
  isUploadform?: boolean
  cat?: Cat
}

export const UploadForm = ({
  handleActiveForm,
  handleEsc,
  isUploadform,
  cat

}: UploadFormProps): JSX.Element => {
  const [itemForm, setItemForm] = useState({
    name: '',
    age: 0,
    favoriteFood: '',
    funFact: '',
    image: ''
  })

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget
    setItemForm({
      ...itemForm,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    if (itemForm.name === '' || itemForm.age === 0 || itemForm.favoriteFood === '' || itemForm.funFact === '' || itemForm.image === null) return
    try {
      void fetch('http://localhost:3000/catBook', {
        method: 'POST',
        body: JSON.stringify(itemForm),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
    } catch (error: any) {
      await Alert('Error', error.message, 'error')
    } finally {
      handleActiveForm(false)
      await Alert('Uploaded', 'Your post was uploaded', 'success')
    }
  }

  const handleUpdate = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    try {
      if (cat?._id !== undefined) {
        void fetch(`http://localhost:3000/catBook/${cat._id}`, {
          method: 'PATCH',
          body: JSON.stringify(itemForm),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
      }
    } catch (error: any) {
      await Alert('Error', error.message, 'error')
    } finally {
      handleActiveForm(false)
      await Alert('Updated', 'Your post has been saved', 'success')
    }
  }

  useEffect(() => {
    if (isUploadform === undefined) {
      if (cat !== undefined) {
        setItemForm({
          name: cat.name,
          age: cat.age,
          funFact: cat.funFact,
          favoriteFood: cat.favoriteFood,
          image: cat.image
        })
      }
    }
  }, [handleActiveForm])

  return (
    <section className="flex flex-col  absolute -top-2  py-10  w-4/5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg ">
      <section className="absolute top-0 right-0 mt-3 ">
        <Button
          text={<Close />}
          isClose
          handleClick={() => { handleActiveForm(false) }}
          handleEsc={() => handleEsc}
          type='button'
        />
      </section>
      <form
        className="flex flex-col gap-7 items-center"
        action="#"
      >
        <Label
          handleChange={handleChange}
          labelName="name"
          text="Cat Name"
          type="text"
          isText
          inputValue={itemForm.name}
        />
        <Label
          handleChange={handleChange}
          labelName="age"
          text="Age"
          type="text"
          isText
          inputValue={itemForm.age}

        />
        <Label
          handleChange={handleChange}
          labelName="favoriteFood"
          text="Favorite Food"
          type="text"
          isText
          inputValue={itemForm.favoriteFood}

        />
        <Label
          handleChange={handleChange}
          labelName="funFact"
          text="Fun Fact"
          type="text"
          isText
          inputValue={itemForm.funFact}

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
          {
            (isUploadform ?? false)
              ? (
              <Button text="Submit" type='submit' isAdd handleClick={handleSubmit}/>

                )
              : (
              <Button text="Update" isAdd type='submit' handleClick={handleUpdate} />

                )
          }
        </footer>
      </form>
    </section>
  )
}
