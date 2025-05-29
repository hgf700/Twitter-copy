"use client";

import React from "react";
import { useUserMessage } from "./useHomeUserMessage";
import "./HomeUserMessage.css";

const UserMessage = () => {
  const { message, setMessage, sendMessage } = useUserMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage();
  };

return (
    <form className="BoxOfMessage" onSubmit={handleSubmit}>
      <div className="InputMessage">
        <input
          type="text"
          placeholder="What is happening?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="ExtraInput">
        
        <input
          type="file"
          accept="audio/*,video/*,image/*"
          // onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button type="submit">Wyślij</button>
      </div>
    </form>
  );
};

export default UserMessage;
