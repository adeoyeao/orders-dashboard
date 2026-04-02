import axios from 'axios'
import { useMemo } from 'react'

export const useClient = () => {
  const client = useMemo(() => {
    const instance = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {
        "Content-Type": "application/json"
      }
    })

    return instance
  }, [])

  return client
}