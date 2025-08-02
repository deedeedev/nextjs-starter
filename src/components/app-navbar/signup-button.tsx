"use client";

import { createAuthClient } from "better-auth/react";

import { Button } from "@/components/ui/button";

export default function SignUpButton() {
  const { signIn } = createAuthClient();
  return (
    <Button asChild size="sm" className="text-sm" onClick={() => signIn}>
      <a href="/sign-up">Sign Up</a>
    </Button>
  );
}
