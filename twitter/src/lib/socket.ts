"use client";

import { io } from "socket.io-client";

const socket = io("http://localhost:3001"); // <-- adres twojego serwera websocket

export default socket;
