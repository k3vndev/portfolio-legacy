import { useEffect, useRef, useState } from 'react'

export const useErrorMessage = (miliseconds: number) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [isShowingError, setIsShowingError] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  const setNewError = (err: string) => {
    setErrorMessage(err)
    setIsShowingError(true)

    clearTimeout(timeoutRef.current ?? 0)

    timeoutRef.current = setTimeout(() => {
      setIsShowingError(false)
    }, miliseconds)
  }
  useEffect(() => () => clearTimeout(timeoutRef.current ?? 0), [])

  const hideError = () => {
    setIsShowingError(false)
  }

  return { isShowingError, setNewError, errorMessage, hideError }
}
