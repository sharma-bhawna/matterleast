import "./Message.css";
import Message, { MessageText } from "@/app/matterleast/Message";

interface MessageGroupProps {
  sender: string;
  messages: Array<MessageText>;
}

const Sender = ({ name }: { name: string }) => (
  <h3 className="sender-name">{name}</h3>
);

const MessageGroup = ({ sender, messages }: MessageGroupProps) => {
  return (
    <section className="message-group">
      <Sender name={sender} />
      {messages.map((message, index) => (
        <Message key={`message-${index}`} message={message} />
      ))}
    </section>
  );
};

export default MessageGroup;
