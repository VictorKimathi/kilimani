"use client";
import { cn } from "@/lib/utils";
import { useChannelStateContext } from "stream-chat-react";
import { Message, MessageList } from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const Messages: React.FC = () => {
  const { messages } = useChannelStateContext();

  return (
    <MessageList className="bg-gray-100 p-4 rounded-lg overflow-y-auto h-full">
      {messages?.map((i, index: number) => (
        <Message
          key={i.id}
          model={{
            position: "normal",
            sender: i.user?.id,
            direction: i.user?.id === localStorage.getItem("local_user") ? "outgoing" : "incoming",
            message: `${i.text}`,
            sentTime: i.created_at?.toString(),
          }}
          className={cn(
            "bg-white rounded-lg p-3 text-black text-sm mb-3",
            index !== messages.length - 1 && "border-b border-gray-200"
          )}
        />
      ))}
    </MessageList>
  );
};

export default Messages;
