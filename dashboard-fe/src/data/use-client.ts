import axios from 'axios'
import { useMemo } from 'react'

export const useClient = () => {
  const client = useMemo(() => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
        "Content-Type": "application/json"
      }
    })

    return instance
  }, [])

  return client
}