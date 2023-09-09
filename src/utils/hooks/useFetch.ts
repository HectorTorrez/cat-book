import { useState } from 'react'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' // Define supported HTTP methods

interface UseFetchResponse {
  data: any
  loading: string
  error: null | string
  fetchData: (method: HttpMethod, requestData: Record<string, any>, id: string) => Promise<void>
}

export const useFetch = (url: string, initialState: any): UseFetchResponse => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState('loading')
  const [error, setError] = useState(null)

  const fetchData = async (method: HttpMethod, requestData: Record<string, any>, id = ''): Promise<void> => {
    setLoading('loading')
    setError(null)
    const newUrl = url + '/' + id
    try {
      const response = await fetch(newUrl, {
        method,
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const responseData = await response.json()
      setData(responseData)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading('success')
    }
  }

  return { data, loading, error, fetchData }
}
