"use client";

import { createAuthClient } from "better-auth/react";

import { Button } from "@/components/ui/button";

export default function SignInButton() {
  const { signIn } = createAuthClient();
  return (
    <Button
      asChild
      size="sm"
      variant="ghost"
      className="text-sm"
      onClick={() => signIn}
    >
      <a href="#">Sign In</a>
    </Button>
  );
}
