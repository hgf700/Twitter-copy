// app/api/post/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.message) {
    return NextResponse.json({ error: "Brak wiadomości" }, { status: 400 });
  }

  const post = await prisma.post.create({
    data: {
      message: body.message
    },
  });

  return NextResponse.json(post, { status: 201 });
}
