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
      const res = await fetch("/api/post");
      const data = await res.json();
      setPosts(data);
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
