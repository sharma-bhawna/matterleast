import "./Message.css";
import Messages, { MessageText } from "@/app/matterleast/Message";

interface MessageGroupProps {
  sender: string;
  messages: MessageText[];
}

const Sender = ({ name }: { name: string }) => (
  <header className="profile">
    <div className="profile-icon">{name[0].toUpperCase()}</div>
    <h3 className="sender-name">{name}</h3>
  </header>
);

const MessageGroup = ({ sender, messages }: MessageGroupProps) => {
  return (
    <section className="message-group">
      <Sender name={sender} />
      <Messages messages={messages} />
    </section>
  );
};

export default MessageGroup;
