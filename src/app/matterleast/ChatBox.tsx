import styled from "styled-components";
import { FormEvent } from "react";

interface ChatBoxProps {
  username: string;
  sendMessage: (x: string) => void;
}

const ChatBox = (props: ChatBoxProps) => {
  const { username, sendMessage } = props;
  const placeholder = `Write to ${username}`;

  const onFormSubmit = (event: FormEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();
    const { message } = Object.fromEntries(new FormData(form).entries());
    sendMessage(message as string);
    form.reset();
  };

  return (
    <form action="" onSubmit={onFormSubmit}>
      <ChatBoxInput
        placeholder={placeholder}
        name="message"
        autoFocus
        autoComplete="off"
      />
    </form>
  );
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
