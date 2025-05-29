import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Obsługa GET – pobieranie postów z bazy danych
export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(posts);
}

// Obsługa POST – tworzenie nowego posta
export async function POST(request: Request) {
  const body = await request.json();

  if (!body.message) {
    return NextResponse.json({ error: "Brak wiadomości" }, { status: 400 });
  }

  const post = await prisma.post.create({
    data: {
      message: body.message,
    },
  });

  return NextResponse.json(post, { status: 201 });
}
