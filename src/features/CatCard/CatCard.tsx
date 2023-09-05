import { Button } from '../../components/Button'
import { type Cat } from '../../types/CatTypes'

export const CatCard = (props: Cat): JSX.Element => {
  const { name, funFact, age, favoriteFood, image, _id } = props

  const handleDelete = (id: string): void => {
    console.log(id)
    console.log('delete')
    try {
      void fetch(`http://localhost:3000/catBook/${id}`, { method: 'DELETE' })
    } catch (error) {
      console.log(error)
    }
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
        <Button handleClick={() => { console.log('Add') }} isAdd text="Edit" />
        <Button
          isDelete
          text="Delete"
          handleClick={() => { handleDelete(_id) }}
        />
      </section>
    </section>
  )
}
