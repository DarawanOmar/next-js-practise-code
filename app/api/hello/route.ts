import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
//   const name = searchParams.get("name");
//   const age = searchParams.get("age");
//   const aoccupition = searchParams.get("aoccupition");

    const obj = Object.fromEntries(searchParams.entries())
//   return NextResponse.json({ name, age, aoccupition });
  return NextResponse.json({obj});
}
