// server.ts
import express from "express";
import type { Request, Response } from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { prisma } from "./src/lib/prisma.js"; // Upewnij się, że rozszerzenie to .js, jeśli używasz TS z ESM

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());

// ===================
// GET /api/post
// ===================
app.get("/api/post", async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Błąd przy pobieraniu postów:", error);
    res.status(500).json({ error: "Wystąpił błąd podczas pobierania postów." });
  }
});

// ===================
// POST /api/post
// ===================
app.post("/api/post", async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Brak wiadomości lub niepoprawny format" });
  }

  try {
    const post = await prisma.post.create({
      data: { message },
    });

    io.emit("new-post", post); // emituj post do klientów
    res.status(201).json(post);
  } catch (error) {
    console.error("Błąd przy tworzeniu posta:", error);
    res.status(500).json({ error: "Wystąpił błąd podczas zapisywania posta." });
  }
});

// ===================
// WebSocket
// ===================
io.on("connection", (socket) => {
  console.log("🟢 Klient połączony przez WebSocket");
});

// ===================
// Uruchom serwer
// ===================
server.listen(3001, () => {
  console.log("🚀 Serwer działa na http://localhost:3001");
});
