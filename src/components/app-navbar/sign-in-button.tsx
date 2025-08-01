"use client";

import { Button } from "@/components/ui/button";

export default function SignInButton() {
  return (
    <Button asChild size="sm" variant="ghost" className="text-sm">
      <a href="/sign-in">Sign In</a>
    </Button>
  );
}
