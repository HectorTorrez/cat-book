import { useEffect } from 'react'

export const usePressEsc = (key: string, action: any): void => {
  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === key) {
        action()
      }
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [])
}
