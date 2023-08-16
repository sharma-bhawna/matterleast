export type MessageText = string;

const Messages = ({ messages }: { messages: MessageText[] }) => (
  <div className="messages">
    {messages.map((message, index) => (
      <Message key={`message-${index}`} message={message} />
    ))}
  </div>
);

const Message = ({ message }: { message: MessageText }) => {
  return <p className="message">{message}</p>;
};

export default Messages;
