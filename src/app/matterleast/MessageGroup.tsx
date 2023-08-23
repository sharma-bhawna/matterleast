import styled from "styled-components";

interface MessageGroupProps {
  sender: string;
  messages: string[];
}

export const ProfileIcon = ({ name }: { name: string }) => (
  <Icon className="profile-icon">{name[0].toUpperCase()}</Icon>
);

const Sender = ({ name }: { name: string }) => (
  <Profile className="profile">
    <ProfileIcon name={name} />
    <Name className="sender-name">{name}</Name>
  </Profile>
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

const Profile = styled.header`
  display: flex;
  align-items: center;
  margin-top: 1.8rem;
`;

const Name = styled.h3`
  margin: 0 0 0 0.5rem;
  color: rgb(64, 67, 79);
`;

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  color: white;
  background-color: goldenrod;
  border-radius: 50%;
  text-align: center;
  line-height: 2;
`;

export default MessageGroup;
