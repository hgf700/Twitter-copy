"use client";

import "./ProfileRecommendations.css";
import Link from "next/link";
import { useProfileRecommendations } from "./useProfileRecommendations";

const ProfileRecommendations = () => {
  const users = useProfileRecommendations();

  return (
    <div className="MainContent">
      <h1>Who to follow!</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userid}>
            <strong>{user.nickname}</strong><br />
            <a href={user.urltoaccount} target="_blank" rel="noopener noreferrer">
              {user.urltoaccount}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileRecommendations;
