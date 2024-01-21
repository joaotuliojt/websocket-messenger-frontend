export interface Message {
  id: string;
  message: string;
  author: string;
  createdAt: Date;
  linkedin: string;
  github: string;
  twitter: string;
}

export interface GetMessageResponse {
  messages: Message[];
}
