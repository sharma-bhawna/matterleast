export type MessageText = string;
interface MessageProps {
  message: MessageText;
}

const Message = ({ message }: MessageProps) => {
  return <p className="message">{message}</p>;
};

export default Message;
