import { Navbar } from './features/Navbar'
// import { test } from './API/test.json'
import { CatCard } from './features/CatCard'
import { useState, useEffect } from 'react'
import { UploadForm } from './components/UploadForm'
import { getCats } from './API/cats'
import { type Cat } from './types/CatTypes'

export const App = (): JSX.Element => {
  const [formIsActive, setFormIsActive] = useState(false)
  const [cats, setCats] = useState<Cat[]>([])
  const getData = async (): Promise<void> => {
    const cat = await getCats()
    if (cats !== undefined) {
      setCats(cat)
    }
  }

  useEffect(() => {
    void getData()
  }, [])

  const handleEsc = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      setFormIsActive(false)
    }
  }
  window.addEventListener('keydown', handleEsc)

  const handleActiveForm = (boolean: boolean): void => {
    setFormIsActive(boolean)
  }

  return (
    <section className="h-screen">
      <Navbar onHandle={handleActiveForm} formIsActive={formIsActive} />
      <section className="grid relative justify-items-center max-w-5xl m-auto sm:grid-cols-1 md:grid-cols-3 mt-10 ">
        {cats.map((cat) => {
          return <CatCard key={cat._id} {...cat} />
        })}
        {formIsActive
          ? (
          <UploadForm
            handleActiveForm={handleActiveForm}
            handleEsc={handleEsc}
          />
            )
          : null}
      </section>
    </section>
  )
}
