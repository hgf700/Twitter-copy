"use client";

import React from "react";
import { usePosts } from "./useMiddleMainContent";
import "./MidlleContent.css";

const MiddleMainContent = () => {
  const { posts, addPost } = usePosts();

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
      <button onClick={() => addPost("Nowy post!")}>Dodaj post</button>
    </div>
  );
};

export default MiddleMainContent;
