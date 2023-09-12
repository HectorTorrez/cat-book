import { type FormEvent, useState, useEffect } from 'react'
import { Button } from './Button'
import { Label } from './Label'
import { Close } from './Icons'
import { type Cat } from '../types/CatTypes'
import { Alert } from './Alert'
import { useFetch } from '../utils/hooks/useFetch'

interface UploadFormProps {
  handleActiveForm: (boolean: boolean) => void
  handleEsc: any
  isUploadform?: boolean
  cat?: Cat
  formName: string
}

export const UploadForm = ({
  handleActiveForm,
  handleEsc,
  isUploadform,
  cat,
  formName

}: UploadFormProps): JSX.Element => {
  const [itemForm, setItemForm] = useState({
    name: '',
    age: 0,
    favoriteFood: '',
    funFact: '',
    image: ''
  })

  const [isEmpty, setIsEmpty] = useState(false)

  const { fetchData, error } = useFetch('http://localhost:3000/catBook', {})

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget
    setItemForm({
      ...itemForm,
      [name]: value
    })
  }
  useEffect(() => {
    if (itemForm.name === '' || itemForm.age < 0 || itemForm.favoriteFood === '' || itemForm.funFact === '' || itemForm.image === null) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }
  }, [itemForm])

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    await fetchData('POST', itemForm, '')
    if (error != null) {
      await Alert('Error', error, 'error')
    } else {
      handleActiveForm(false)
      await Alert('Uploaded', 'Your post was uploaded', 'success')
    }
  }

  const handleUpdate = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    if (cat?._id !== undefined) {
      await fetchData('PATCH', itemForm, cat._id)
    }
    if (error != null) {
      await Alert('Error', error, 'error')
    } else {
      handleActiveForm(false)
      await Alert('Update', 'Your post has been saved, refresh the page please', 'success')
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
    <section className="flex flex-col  absolute -top-2  py-10  w-4/5 md:w-[500px]  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl border-gray-300 ">
      <section className="absolute top-0 right-0 mt-3 ">
        <Button
          text={<Close />}
          isClose
          handleClick={() => { handleActiveForm(false) }}
          handleEsc={() => handleEsc}
          type='button'
        />
      </section>
      <h3 className='text-center mb-10 font-bold text-3xl'>{formName}</h3>
      <form
        className="flex flex-col gap-12 items-center"
        action="#"
      >
        <Label
          handleChange={handleChange}
          labelName="name"
          text="Cat Name"
          type="text"
          isText
          inputValue={itemForm.name}
          placeholder='Pepito'
        />
        <Label
          handleChange={handleChange}
          labelName="age"
          text="Age"
          type="text"
          isText
          inputValue={itemForm.age}
          placeholder='10 years'
        />
        <Label
          handleChange={handleChange}
          labelName="favoriteFood"
          text="Favorite Food"
          type="text"
          isText
          inputValue={itemForm.favoriteFood}
          placeholder='Meat'
        />
        <Label
          handleChange={handleChange}
          labelName="funFact"
          text="Fun Fact"
          type="text"
          isText
          inputValue={itemForm.funFact}
          placeholder='Pepito likes to go to the space'
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
          inputValue={itemForm.image}
          placeholder='http://image.com'
        />
              )
            : null
        }

        <footer>
          {
            (isUploadform ?? false)
              ? (
              <Button text="Submit" type='submit' isAdd handleClick={handleSubmit} isEmpty={isEmpty}/>

                )
              : (
              <Button text="Update" isAdd type='button' handleClick={handleUpdate} isEmpty={isEmpty} />

                )
          }
        </footer>
      </form>
    </section>
  )
}
