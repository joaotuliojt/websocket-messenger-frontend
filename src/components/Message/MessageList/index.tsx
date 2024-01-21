import { MessageCard } from "../MessageCard";
import { useMessageList } from "./useMessageList";

export function MessageList() {
  const { messages } = useMessageList();

  return (
    <div className="grid grid-cols-3 max-w-7xl gap-5">
      {messages.map((item) => (
        <MessageCard key={item.id} {...item} />
      ))}
    </div>
  );
}
