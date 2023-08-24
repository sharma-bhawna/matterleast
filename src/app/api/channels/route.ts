import { NextRequest, NextResponse } from "next/server";

const channels = [
  "Off-Topic",
  "Random",
  "Townhall",
  "General",
  "Sports",
  "Cricket",
];

export function GET(req: NextRequest) {
  const res = NextResponse.json(channels);
  res.headers.set("Cache-Control", "no-cache");
  return res;
}

export async function POST(req: NextRequest) {
  const { channel } = await req.json();
  channels.push(channel);
  return NextResponse.json(channels);
}
