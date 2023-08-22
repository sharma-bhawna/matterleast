import "./Message.css";
import styled from "styled-components";

interface MessageGroupProps {
  sender: string;
  messages: string[];
}

export const ProfileIcon = ({ name }: { name: string }) => (
  <div className="profile-icon">{name[0].toUpperCase()}</div>
);

const Sender = ({ name }: { name: string }) => (
  <header className="profile">
    <ProfileIcon name={name} />
    <h3 className="sender-name">{name}</h3>
  </header>
);

const MessageGroup = ({ sender, messages }: MessageGroupProps) => {
  return (
    <MessagesSection>
      <Sender name={sender} />
      <Messages>
        {messages.map((message, index) => (
          <Message key={`message-${index}`}>{message}</Message>
        ))}
      </Messages>
    </MessagesSection>
  );
};

const MessagesSection = styled.section`
  border-top: 1px solid darkgrey;
  padding-left: 5rem;
  height: 94%;
`;

const Messages = styled.div`
  margin-left: 2.4rem;
`;

export const Message = styled.p`
  margin: 2px;
  font-size: 16px;
  line-height: 1.2;
  color: rgb(120, 122, 131);
`;

export default MessageGroup;
