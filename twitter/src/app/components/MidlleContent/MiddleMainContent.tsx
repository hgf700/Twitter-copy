"use client";

import { useEffect, useState } from "react";
import socket from "@/lib/socket";
import "./MidlleContent.css";

type Post = {
  id: number;
  message: string;
  createdAt: string;
};

const MiddleMainContent = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/post");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();

    // Gdy ktoś inny doda posta – dodaj go do listy bez odświeżania wszystkiego
    socket.on("new-post", (post: Post) => {
      setPosts((prev) => [post, ...prev]);
    });

    return () => {
      socket.off("new-post");
    };
  }, []);

  const handleNewPost = async (message: string) => {
    const res = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" },
    });

    const newPost = await res.json();

    // Emituj nowego posta do innych
    socket.emit("new-post", newPost);

    // Dodaj go też lokalnie
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="MainContent">
      <h1>Witaj w aplikacji!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.message}
            <br />
            <small>{new Date(post.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
      <button onClick={() => handleNewPost("Nowy post!")}>Dodaj post</button>
    </div>
  );
};

export default MiddleMainContent;
