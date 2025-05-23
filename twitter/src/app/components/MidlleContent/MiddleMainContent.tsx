"use client";

import { useEffect, useState } from "react";
import "./MidlleContent.css";

type Post = {
  id: number;
  message: string;
  createdAt: string;
};

const MiddleMainContent = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const text = await res.text();
        const data = text ? JSON.parse(text) : [];
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };


    fetchPosts();
  }, []);

  return (
    <div className="MainContent">
      <h1>Witaj w aplikacji!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>: {post.message}
            <br />
            <small>{new Date(post.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MiddleMainContent;
