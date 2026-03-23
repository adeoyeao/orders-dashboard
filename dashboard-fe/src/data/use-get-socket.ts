import { io, Socket } from 'socket.io-client'
import { useEffect } from 'react'

let socket: Socket | null = null

export const getSocket = (url: string): Socket => {
  if (!socket) {
    socket = io(url, {
      autoConnect: false
    })
  }

  return socket
}

export const useSocket = (url: string): Socket => {
  const socket = getSocket(url);

  useEffect(() => {
    socket.connect();
    return () => { socket. disconnect() }
  }, [])

  return socket
}