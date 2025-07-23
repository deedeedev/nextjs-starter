"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid h-full place-items-center">
      <Card className="max-w-lg text-center">
        <CardHeader>
          <h1 className="text-3xl">Next.js Starter</h1>
        </CardHeader>
        <CardContent>
          <p className="text-xl">A simple starter for Next.js</p>
        </CardContent>
      </Card>
    </div>
  );
}
