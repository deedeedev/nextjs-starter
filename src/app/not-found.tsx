import { FileQuestionMark } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="grid h-full place-items-center">
      <Card>
        <CardHeader className="flex items-center justify-center gap-2">
          <FileQuestionMark />
          <h1 className="text-3xl">404 Not Found</h1>
        </CardHeader>
        <CardContent>
          <p className="text-xl">This page cannot be found.</p>
        </CardContent>
      </Card>
    </div>
  );
}
