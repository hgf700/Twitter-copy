import { useState } from "react";

export const useUserMessage = () => {
  const [message, setMessage] = useState("");
  const API_URL = "http://localhost:3001"; // 👈 dodaj to, jak w usePosts

  const sendMessage = async () => {
    if (!message.trim()) return;

    await fetch(`${API_URL}/router`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    setMessage("");
  };

  return { message, setMessage, sendMessage };
};
