import { useState } from "react";
import "../../styles/postDetails.css";

export default function CommentInput({ onSend }) {

  const [message, setMessage] = useState("");

  const handleSend = () => {

    if (!message.trim()) return;

    onSend(message);

    setMessage("");

  };

  return (

    <div className="comment-input">

      <input
        type="text"
        placeholder="Write a comment..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />

      <button onClick={handleSend}>
        Send
      </button>

    </div>

  );

}