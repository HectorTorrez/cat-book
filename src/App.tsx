import { Navbar } from './features/Navbar'
import { CatCard } from './features/CatCard'
import { useState, useEffect } from 'react'
import { UploadForm } from './components/UploadForm'
import { getCats } from './API/cats'
import { type Cat } from './types/CatTypes'
import { Refresh } from './components/Refresh'
import { usePressEsc } from './utils/hooks/usePressEsc'

export const App = (): JSX.Element => {
  const [formIsActive, setFormIsActive] = useState(false)
  const [cats, setCats] = useState<Cat[]>([])
  const [isLoading, setIsLoading] = useState('loading')

  const getData = async (): Promise<void> => {
    const cat = await getCats()
    if (cats !== undefined) {
      setCats(cat)
    }
    setIsLoading('successful')
  }
  useEffect(() => {
    void getData()
  }, [formIsActive, isLoading])

  usePressEsc('Escape', () => {
    setFormIsActive(false)
  })

  const handleActiveForm = (boolean: boolean): void => {
    setFormIsActive(boolean)
  }

  const handleRefresh = (): void => {
    setIsLoading('loading')
    setTimeout(() => {
      setIsLoading('successful')
    }, 500)
  }

  return (
    <section className="h-screen">
      <Navbar onHandle={handleActiveForm} formIsActive={formIsActive} />
      <Refresh handleRefresh={handleRefresh}/>
      <section className="grid relative justify-items-center max-w-5xl m-auto sm:grid-cols-1 md:grid-cols-3 mt-10 ">
        {
          isLoading === 'loading'
            ? null
            : (
              <>
              {cats.map((cat) => {
                return <CatCard key={cat._id} {...cat} />
              })}
        </>
              )
        }

        {formIsActive
          ? (
          <UploadForm
            handleActiveForm={handleActiveForm}
            handleEsc={usePressEsc}
            isUploadform
          />
            )
          : null}
      </section>
    </section>
  )
}
