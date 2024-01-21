import { socketConnetion } from "@/services/socket";
import { useEffect, useState } from "react";
import { getMessages } from "../getMessages";
import { Message } from "../types";

export function useMessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    (async () => {
      const messages = await getMessages();
      setMessages(messages);
    })();
  }, []);

  useEffect(() => {
    const socket = socketConnetion();

    socket.on("message:send", (data: Message) => {
      const message: Message = {
        ...data,
        createdAt: new Date(data.createdAt),
      };
      setMessages((messages) => [message, ...messages]);
    });

    () => {
      socket.close();
    };
  }, []);

  return { messages };
}
