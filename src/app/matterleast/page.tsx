import ChatBox from "@/app/matterleast/ChatBox";
import MessageGroup, { ProfileIcon } from "@/app/matterleast/MessageGroup";
import Sidebar from "@/app/matterleast/Sidebar";
import "./Page.css";

const messages = ["Hi", "Hello", "I'm James"];
const senderName = "James";

export default function Matterleast() {
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
        <ChatBox username={senderName} />
      </main>
    </div>
  );
}
