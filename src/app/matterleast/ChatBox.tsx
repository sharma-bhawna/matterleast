import "./ChatBox.css";

interface ChatBoxProps {
  username: string;
}
const ChatBox = (props: ChatBoxProps) => {
  const placeholder = `Write to ${props.username}`;

  return <input type="text" placeholder={placeholder} className="chatBox" />;
};

export default ChatBox;
