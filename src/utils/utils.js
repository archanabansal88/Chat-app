export function getInitialMessages() {
  const INITIAL_MESSAGES = [
    {
      sender: "Paul",
      message: "Hello",
    },
    {
      sender: "Dara",
      message: "Hey",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(INITIAL_MESSAGES), 1000);
  });
}

export function getNewMessages() {
  const generateNewMessage = () => ({
    sender: "Dara",
    message: Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5),
  });

  return new Promise((resolve) => {
    setTimeout(() => resolve([generateNewMessage()]), 1000);
  });
}
