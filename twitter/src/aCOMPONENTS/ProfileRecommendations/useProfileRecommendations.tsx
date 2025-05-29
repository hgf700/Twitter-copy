// import { useEffect, useState } from "react";
// import socket from "@/lib/socket";

// export type User = {
//   userid: number;
//   nickname: string;
//   urltoaccount: string;
// };

// export const useProfileRecommendations = () => {
//   const [posts, setPosts] = useState<User[]>([]);

// const API_URL = "http://localhost:3002";

// const fetchPosts = async () => {
//   const res = await fetch(`${API_URL}/router`);
//   const data = await res.json();
//   setPosts(data);
// };

//   useEffect(() => {
//     fetchPosts();

//     socket.on("new-post", (post: Post) => {
//       setPosts((prev) => [post, ...prev]);
//     });

//     return () => {
//       socket.off("new-post");
//     };
//   }, []);

// const addPost = async (message: string) => {
//   const res = await fetch(`${API_URL}/router`, {
//     method: "POST",
//     body: JSON.stringify({ message }),
//     headers: { "Content-Type": "application/json" },
//   });
//   await res.json();
// };


//   return { posts, addPost };
// };
