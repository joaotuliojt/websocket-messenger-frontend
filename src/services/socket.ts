import { io } from "socket.io-client";

export function socketConnetion() {
  const socket = io("http://localhost:3333", {
    withCredentials: false,
  });
  return socket;
}
