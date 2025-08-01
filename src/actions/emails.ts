"use server";

import type { User } from "better-auth";
import { Resend } from "resend";

import VerificationEmailTemplate from "@/components/email/verification-email-template";
import env from "@/env/server";

export async function sendVerificationEmail(
  user: User,
  verificationUrl: string
) {
  const resend = new Resend(env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: "Next.js Starter <admin@nextjsstarter.com>",
      to: [user.email],
      subject: "Verify your email address",
      react: VerificationEmailTemplate({ user, verificationUrl }),
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
