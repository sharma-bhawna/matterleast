"use client";
import ChatBox from "@/app/matterleast/ChatBox";
import MessageGroup, { ProfileIcon } from "@/app/matterleast/MessageGroup";
import Sidebar from "@/app/matterleast/Sidebar";
import "./Page.css";
import { useEffect, useState } from "react";

const senderName = "James";

export default function Matterleast() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((messages) => setMessages(messages));
  }, []);

  const sendMessage = (message: string) => {
    fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((messages) => setMessages(messages));
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
