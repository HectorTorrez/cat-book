import { useState } from 'react'
import { Button } from '../../components/Button'
import { type Cat } from '../../types/CatTypes'
import { UploadForm } from '../../components/UploadForm'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { usePressEsc } from '../../utils/hooks/usePressEsc'
import { Alert } from '../../components/Alert'
const MySwal = withReactContent(Swal)

export const CatCard = (props: Cat): JSX.Element => {
  const { name, funFact, age, favoriteFood, image, _id } = props

  const [isActive, setIsActive] = useState(false)
  const [cat, setCat] = useState<Cat>()

  const handleDelete = async (id: string): Promise<void> => {
    try {
      void MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          void fetch(`http://localhost:3000/catBook/${id}`, { method: 'DELETE' })
          void MySwal.fire(
            'Deleted!',
            'Your file has been deleted. Please reload to watch the changes',
            'success'
          )
        }
      })
    } catch (error: any) {
      await Alert('Error', error.message, 'error')
    }
  }

  usePressEsc('Escape', () => {
    setIsActive(false)
  })

  const handleActiveForm = (boolean: boolean): void => {
    setIsActive(boolean)
  }

  const handleSetCat = (object: Cat): void => {
    setCat(object)
  }

  return (
    <section className="flex flex-col h-[450px] shadow-lg rounded-lg ">
      <article className="w-[250px] transform transition-transform duration-500 ease-in-out hover:scale-110  ">
        <div className="inset-0 bg-black bg-opacity-80 rounded  ">
          <img
            className="object-cover rounded-t-lg"
            src={image}
            alt="cat-image"
          />
        </div>
      </article>
      <section className="px-3 py-4 w-[250px] h-[300px] ">
        <h2 className="font-bold text-lg mb-3">{name}</h2>
        <p className="font-bold">
          Age: <span className="font-normal">{age}</span>
        </p>
        <p className="font-bold">
          Favorite food: <span className="font-normal">{favoriteFood}</span>
        </p>
        <p className="break-words font-bold">
          Fun Fact:{' '}
          <span className="break-words inline-block font-normal">
            {funFact}
          </span>
        </p>
      </section>
      <section className="border-t border-black h-[100px] flex justify-between items-center px-3 py-4">
        <Button handleClick={() => {
          handleActiveForm(true)
          handleSetCat(props)
        }} isAdd text="Edit" type='button' />
        <Button
          type='button'
          isDelete
          text="Delete"
          handleClick={() => {
            void handleDelete(_id)
          }}
        />
      </section>
      <section className='z-50 absolute left-0 w-full m-auto flex justify-center '>
      {
        isActive
          ? (
          <UploadForm handleActiveForm={handleActiveForm} handleEsc={usePressEsc} cat={cat} />
            )
          : null
      }
       </section>
    </section>
  )
}
