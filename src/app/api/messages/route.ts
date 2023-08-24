import { NextResponse } from "next/server";

export function GET(req: Request) {
  return NextResponse.json([
    "Aftab",
    "Suman",
    "Tilak Puli",
    "Sapana",
    "Rishabh",
    "Arnob",
  ]);
}
