import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { socketConnetion } from "@/services/socket";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorLabel } from "./components/ErrorLabel";
import { FormData, formSchema } from "./schema";

export function FormMessage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit((data: FormData) => {
    const socket = socketConnetion();
    socket.emit("message:new", data);
  });

  return (
    <div className="min-h-screen grid place-items-center">
      <Card.Root className="w-[400px]">
        <Card.Header>
          <Card.Title>Send a new message</Card.Title>
          <Card.Description>
            Fill the form to send a new message
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="name">Name:</Label>
              <Input id="author" {...register("author")} />
              {errors.author?.message && (
                <ErrorLabel message={errors.author.message} />
              )}
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="name">Message:</Label>
              <Textarea id="message" {...register("message")} />
              {errors.message?.message && (
                <p className="text-destructive font-normal">
                  {errors.message?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="github">GitHub:</Label>
              <Input id="github" {...register("github")} />
              {errors.github?.message && (
                <ErrorLabel message={errors.github.message} />
              )}
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="github">Linkedin:</Label>
              <Input id="linkedin" {...register("linkedin")} />
              {errors.linkedin?.message && (
                <ErrorLabel message={errors.linkedin.message} />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="github">Twitter:</Label>
              <Input id="twitter" {...register("twitter")} />
              {errors.twitter?.message && (
                <ErrorLabel message={errors.twitter.message} />
              )}
            </div>
            <Button type="submit" className="mt-6 w-full">
              Send
            </Button>
          </form>
        </Card.Content>
      </Card.Root>
    </div>
  );
}
