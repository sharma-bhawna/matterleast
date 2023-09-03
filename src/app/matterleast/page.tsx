"use client";
import ChatBox from "@/app/matterleast/ChatBox";
import MessageGroup, { ProfileIcon } from "@/app/matterleast/MessageGroup";
import Sidebar from "@/app/matterleast/Sidebar";
import "./Page.css";
import { useState } from "react";

const senderName = "James";

export default function Matterleast() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message: string) => {
    const latestMessages = messages.concat(message as any);
    setMessages(latestMessages);
  };

  return (
    <div className="app">
      <header className="header">
        <span>Channels</span>
        <input placeholder="Search" type="text" />
        <ProfileIcon name={senderName} />
      </header>
      <Sidebar workspace="Step" />
      <main>
        <MessageGroup sender={senderName} messages={messages} />
        <ChatBox username={senderName} sendMessage={sendMessage} />
      </main>
    </div>
  );
}
