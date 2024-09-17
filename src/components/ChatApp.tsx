import { useEffect, useState } from "react";
import { getInitialMessages, getNewMessages } from "../utils/utils";
import Message from "./Message";

export const ChatApp = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<
    Array<{ sender: string; message: string }>
  >([]);

  useEffect(() => {
    setIsLoading(true);
    getInitialMessages().then((response) => {
      setMessages(response);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getNewMessages().then((response) => {
        setMessages((prevMessages) => [...prevMessages, ...response]);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAddUserInput = () => {
    const newMessage = {
      sender: "Archana",
      message: userInput,
    };
    setMessages([...messages, newMessage]);
    setUserInput("");
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        messages.map((message) => (
          <Message sender={message.sender} message={message.message} />
        ))
      )}
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button disabled={!userInput} onClick={handleAddUserInput}>
        Send
      </button>
    </div>
  );
};
