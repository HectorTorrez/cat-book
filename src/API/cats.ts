import { type Cat } from '../types/CatTypes'

export const getCats = async (): Promise<Cat[]> => {
  const URL = 'http://localhost:3000/catBook/'
  try {
    return await fetch(URL)
      .then(async res => await res.json())
      .then(json => {
        return json
      })
  } catch (error) {
    console.error(error)
    return []
  }
}
