import ChatBox from "@/app/matterleast/ChatBox";
import MessageGroup from "@/app/matterleast/MessageGroup";
import Sidebar from "@/app/matterleast/Sidebar";

const messages = ["Hi", "Hello", "I'm James"];

export default function Matterleast() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar workspace="Step" channelNames={[]} profileNames={[]} />
      <main style={{ width: "75%" }}>
        <MessageGroup sender="James" messages={messages} />
        <ChatBox username="James" />
      </main>
    </div>
  );
}
