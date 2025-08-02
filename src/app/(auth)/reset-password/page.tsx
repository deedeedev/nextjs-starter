import { ResetPasswordForm } from "@/components/forms/reset-password-form";

export default function SignInPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <ResetPasswordForm />
    </div>
  );
}
