import { io, Socket } from "socket.io-client";
import { useEffect } from "react";

const sockets = new Map<string, Socket>();

export const getSocket = (url: string): Socket => {
  const existingSocket = sockets.get(url);
  if (existingSocket) {
    return existingSocket;
  }

  const socket = io(url, {
    autoConnect: false,
  });

  sockets.set(url, socket);

  return socket;
};

export const useSocket = (url: string): Socket => {
  const socket = getSocket(url);

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, [socket]);

  return socket;
};
