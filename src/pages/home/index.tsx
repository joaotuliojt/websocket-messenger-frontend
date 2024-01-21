import { MessageList } from "@/components/Message/MessageList";
import { ModeToggle } from "@/components/mode-toggle";

export function Home() {
  return (
    <main className="min-h-screen grid place-items-center pb-8 pt-8">
      <div className="fixed bottom-6 right-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-center text-4xl">Messages</h1>
        <MessageList />
      </div>
    </main>
  );
}
