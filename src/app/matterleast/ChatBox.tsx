import styled from "styled-components";

interface ChatBoxProps {
  username: string;
}

const ChatBox = (props: ChatBoxProps) => {
  const placeholder = `Write to ${props.username}`;

  return <ChatBoxInput type="text" placeholder={placeholder} />;
};

const ChatBoxInput = styled.input`
  width: 96%;
  height: 2rem;
  padding: 0 10px;
  margin-left: 12px;
  border-radius: 4px;
  border: 1px solid;
  font-size: 1.2rem;
`;
export default ChatBox;
