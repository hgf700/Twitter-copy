import { useEffect, useState } from "react";
import socket from "@/lib/socket";

export type Post = {
  id: number;
  message: string;
  createdAt: string;
};

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

const API_URL = "http://localhost:3001";

const fetchPosts = async () => {
  const res = await fetch(`${API_URL}/api/post`);
  const data = await res.json();
  setPosts(data);
};

  useEffect(() => {
    fetchPosts();

    socket.on("new-post", (post: Post) => {
      setPosts((prev) => [post, ...prev]);
    });

    return () => {
      socket.off("new-post");
    };
  }, []);

const addPost = async (message: string) => {
  const res = await fetch(`${API_URL}/api/post`, {
    method: "POST",
    body: JSON.stringify({ message }),
    headers: { "Content-Type": "application/json" },
  });
  await res.json();
};


  return { posts, addPost };
};
