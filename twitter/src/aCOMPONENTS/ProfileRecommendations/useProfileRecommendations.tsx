"use client";

import { useState, useEffect } from "react";

export type User = {
  userid: number;
  nickname: string;
  urltoaccount: string;
};

const mockUsers: User[] = [
  {
    userid: 1,
    nickname: "asd1",
    urltoaccount: "http://asd1.com"
  },
  {
    userid: 2,
    nickname: "asd2",
    urltoaccount: "http://asd2.com"
  },
  {
    userid: 3,
    nickname: "asd3",
    urltoaccount: "http://asd3.com"
  }
];

export const useProfileRecommendations = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // symulacja pobrania danych
    setUsers(mockUsers);
  }, []);

  return users;
};
