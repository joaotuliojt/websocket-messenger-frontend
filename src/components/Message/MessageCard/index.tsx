import { AvatarImage } from "@radix-ui/react-avatar";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Avatar } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Message } from "../types";

type MessageCardProps = Message;

export function MessageCard({
  author,
  createdAt,
  message,
  github,
  linkedin,
  twitter,
}: MessageCardProps) {
  return (
    <Card.Root>
      <Card.Header className="flex items-center">
        <div className="flex items-center gap-3">
          <Avatar className="w-16 h-16">
            <AvatarImage src={`${github}.png`} />
          </Avatar>
        </div>
        <p className="text-lg">{author}</p>
      </Card.Header>
      <Card.Content>
        <Card.Description className="italic text-lg text-center">
          "{message}" - {author} {createdAt.toLocaleDateString("pt-br")}
        </Card.Description>
      </Card.Content>
      <Card.Footer className="flex flex-col items-center justify-center border-t pb-4 pt-4">
        <div className="flex gap-2">
          {github && (
            <Button asChild variant="outline" size="icon">
              <a href={github} target="_blank">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {linkedin && (
            <Button asChild variant="outline" size="icon">
              <a href={linkedin} target="_blank">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
          {twitter && (
            <Button asChild variant="outline" size="icon">
              <a href={twitter} target="_blank">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </Card.Footer>
    </Card.Root>
  );
}
