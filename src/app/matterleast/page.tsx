import ChatBox from "@/app/matterleast/ChatBox";
import MessageGroup from "@/app/matterleast/MessageGroup";

const messages = ["Hi", "Hello", "I'm James"];

export default function Matterleast() {
  return (
    <>
      <MessageGroup sender="James" messages={messages} />
      <ChatBox username="James" />
    </>
  );
}
