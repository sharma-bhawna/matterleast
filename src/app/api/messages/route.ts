import { NextRequest, NextResponse } from "next/server";

const messages = ["Hello", "Hi there"];

export function GET(req: NextRequest) {
  const res = NextResponse.json(messages);
  res.headers.set("Cache-Control", "no-cache");
  return res;
}

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  messages.push(message);
  return NextResponse.json(messages);
}
