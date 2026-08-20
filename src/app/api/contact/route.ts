import { NextResponse } from "next/server";

// Stub handler: validates the payload and logs it server-side. Swap the body
// of the try block for a real email provider (e.g. Resend, Postmark) when
// ready — see README.md "Wiring up the forms".
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string" || typeof body.message !== "string") {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  console.log("[contact] new enquiry:", {
    name: body.name,
    email: body.email,
    subject: body.subject ?? "General Enquiry",
    message: body.message,
  });

  return NextResponse.json({ ok: true });
}
