import LogoutButton from "@/components/logout-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid h-full place-items-center">
      <Card className="max-w-lg text-center">
        <CardHeader>
          <h1 className="text-3xl">Next.js Starter</h1>
        </CardHeader>
        <CardContent>
          <LogoutButton />
        </CardContent>
      </Card>
    </div>
  );
}
