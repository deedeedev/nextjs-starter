import type { User } from "better-auth";

interface VerificationEmailTemplateProps {
  user: User;
  verificationUrl: string;
}

const VerificationEmailTemplate = ({
  user,
  verificationUrl,
}: VerificationEmailTemplateProps) => {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Click this button to verify your email:</p>
      <a href={verificationUrl}>
        <button>Verify</button>
      </a>
    </div>
  );
};

export default VerificationEmailTemplate;
