"use client";

import React from "react";
import { useUserMessage } from "./useUserMessage";
import "./UserMessage.css";

const UserMessage = () => {
  const { message, setMessage, sendMessage } = useUserMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage();
  };

  return (
    <form className="InputMessage" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is happening?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};

export default UserMessage;
