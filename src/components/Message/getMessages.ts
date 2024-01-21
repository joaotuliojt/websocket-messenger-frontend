import { GetMessageResponse, Message } from "./types";

export async function getMessages(): Promise<Message[]> {
  const res = await fetch("http://localhost:3333/message");
  const data: GetMessageResponse = await res.json();
  return data.messages.map((message) => {
    return {
      ...message,
      createdAt: new Date(message.createdAt),
    };
  });
}
