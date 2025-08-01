"use client";

import { useRouter } from "next/navigation";

import { LogOut } from "lucide-react";

import { authClient } from "@/lib/auth-client";

import { Button } from "./ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <Button variant="outline" onClick={handleLogout}>
      Logout <LogOut size={4} />
    </Button>
  );
}
