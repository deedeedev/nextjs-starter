"use server";

import type { User } from "better-auth";
import { Resend } from "resend";

import ResetPasswordEmailTemplate from "@/components/emails/reset-password";
import VerifyEmailTemplate from "@/components/emails/verify-email";
import env from "@/env/server";

export async function sendVerificationEmail(
  user: User,
  verificationUrl: string
) {
  const resend = new Resend(env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "Next.js Starter <noreply@resend.dev>",
      to: [user.email],
      subject: `Hi ${user.name}, please verify your email address`,
      react: VerifyEmailTemplate({ username: user.name, verificationUrl }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function sendResetPasswordEmail(user: User, resetUrl: string) {
  const resend = new Resend(env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "Next.js Starter <noreply@resend.dev>",
      to: [user.email],
      subject: "Reset your password",
      react: ResetPasswordEmailTemplate({
        username: user.name,
        userEmail: user.email,
        resetUrl,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
