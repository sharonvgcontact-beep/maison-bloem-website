import { NextResponse } from "next/server";

// Stub handler — see /api/contact/route.ts and README.md for how to wire
// this up to a real email/list provider.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !body.email.includes("@")) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  }

  console.log("[newsletter] new signup:", body.email);

  return NextResponse.json({ ok: true });
}
