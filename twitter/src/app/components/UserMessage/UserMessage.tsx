"use client";

import { useState } from "react";
import "./UserMessage.css";

const UserMessage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sender: "anonymous" }),
    });

    setMessage(""); // wyczyść po wysłaniu
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
