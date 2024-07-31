"use client";

import { useState, useEffect } from "react";
import { DevToken, StreamChat } from "stream-chat";
import Messages from "./Messages";
import { Button } from "@/components/ui/button";
import { Channel, Chat } from "stream-chat-react";
import { Textarea } from "@/components/ui/textarea";
import { generateUsername } from "unique-username-generator";
// import MapComponent from "./MapComponent";
import MapComponent from "@/components/MapComponent";
import "stream-chat-react/dist/css/index.css";

const ChatApp: React.FC = () => {
  const [channel, setChannel] = useState<any>(null);
  const [chatClient, setChatClient] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const watchChannel = () => {
    const channel = chatClient.channel("messaging", "livestreaming_chat", {
      name: "Live Streaming Chat",
    });
    channel.watch().then(() => setChannel(channel));
  };

  const loadChatClient = async () => {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
    
    if (!apiKey) {
      console.error("Stream API key is not defined.");
      return;
    }

    const newChatClient = new StreamChat(apiKey, {
      enableWSFallback: true,
    });

    if (newChatClient.user) await newChatClient.disconnectUser();
    
    const localUser = localStorage.getItem("local_user");
    if (!localUser) localStorage.setItem("local_user", generateUsername());
    const id = localStorage.getItem("local_user");
    const userToConnect = { id };
    await newChatClient.connectUser(userToConnect, DevToken(userToConnect.id));
    setChatClient(newChatClient);
  };

  useEffect(() => {
    loadChatClient();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (chatClient) watchChannel();
  }, [chatClient]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files ? event.target.files[0] : null);
  };

  const sendMessage = async () => {
    if (channel && chatClient) {
      const message: any = {
        text: (document.getElementById("message_text") as HTMLInputElement).value,
      };

      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        message.attachments = [{ type: "image", asset_url: data.url }];
        setSelectedFile(null);
      }

      if (location) {
        message.location = location;
      }

      await channel.sendMessage(message);
      (document.getElementById("message_text") as HTMLInputElement).value = "";
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/5 p-5">
        <MapComponent location={location} />
      </div>
      <div className="w-3/5 p-5 flex flex-col">
        <div className="flex flex-col flex-grow gap-y-3 border-b border-gray-300 pb-5">
          <span className="font-semibold text-xl">Community Chat</span>
          {channel && (
            <Chat client={chatClient}>
              <Channel channel={channel}>
                <Messages />
              </Channel>
            </Chat>
          )}
        </div>
        <div className="flex flex-col gap-y-3 pt-5">
          <Textarea
            id="message_text"
            name="message_text"
            placeholder="Type your message..."
            className="min-h-[100px] w-full border border-gray-300 rounded-lg p-3"
          />
          <input type="file" onChange={handleFileChange} className="mb-3" />
          <Button className="max-w-max self-end bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={sendMessage}>
            Send Message →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
