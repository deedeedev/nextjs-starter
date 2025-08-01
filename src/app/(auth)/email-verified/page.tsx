import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid h-full place-items-center">
      <Card className="max-w-lg text-center">
        <CardHeader>
          <h1 className="text-3xl">Email Verification</h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xl">Your email has been successfully verified.</p>
          <Button asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
