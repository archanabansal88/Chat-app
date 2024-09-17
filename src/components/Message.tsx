const Message = ({ sender, message }: { sender: string; message: string }) => {
  return (
    <div>
      <div>
        {sender}: {message}
      </div>
    </div>
  );
};

export default Message;
