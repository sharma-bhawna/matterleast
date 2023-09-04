import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json([
    "Aftab",
    "Suman",
    "Tilak Puli",
    "Sapana",
    "Rishabh",
    "Arnob",
  ]);
}
