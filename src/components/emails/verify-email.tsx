import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface VerifyEmailTemplateProps {
  username: string;
  verificationUrl: string;
}

const VerifyEmailTemplate = ({
  username,
  verificationUrl,
}: VerifyEmailTemplateProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Verify your email address to complete your account setup
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 py-[40px] font-sans">
          <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white px-[32px] py-[40px]">
            {/* Header */}
            <Section className="mb-[32px] text-center">
              <Heading className="m-0 mb-[8px] text-[28px] font-bold text-gray-900">
                Verify Your Email Address
              </Heading>
              <Text className="m-0 text-[16px] text-gray-600">
                Hi {username}, we need to verify your email address to complete
                your account setup
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="m-0 mb-[16px] text-[16px] text-gray-700">
                Hi there,
              </Text>
              <Text className="m-0 mb-[16px] text-[16px] text-gray-700">
                Thanks for signing up! To get started, please verify your email
                address <strong>{username}</strong> by clicking the button
                below.
              </Text>
              <Text className="m-0 mb-[24px] text-[16px] text-gray-700">
                This verification link will expire in 1 hour for security
                purposes.
              </Text>
            </Section>

            {/* CTA Button */}
            <Section className="mb-[32px] text-center">
              <Button
                href={verificationUrl}
                className="box-border inline-block rounded-[8px] bg-blue-600 px-[32px] py-[16px] text-[16px] font-semibold text-white no-underline"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="m-0 mb-[8px] text-[14px] text-gray-600">
                If the button doesn&apos;t work, you can copy and paste this
                link into your browser:
              </Text>
              <Text className="m-0 text-[14px] break-all text-blue-600">
                {verificationUrl}
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="mb-[32px] border-t border-solid border-gray-200 pt-[24px]">
              <Text className="m-0 mb-[8px] text-[14px] text-gray-600">
                <strong>Security tip:</strong> If you didn&apos;t create an
                account, you can safely ignore this email.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-solid border-gray-200 pt-[24px]">
              <Text className="m-0 mb-[8px] text-[12px] text-gray-500">
                This email was sent to {username}
              </Text>
              <Text className="m-0 mb-[8px] text-[12px] text-gray-500">
                © 2025 Your Company Name. All rights reserved.
              </Text>
              <Text className="m-0 text-[12px] text-gray-500">
                123 Business Street, Bologna, IT 40100
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VerifyEmailTemplate.PreviewProps = {
  user: {
    name: "John Smith",
    email: "test@example.com",
  },
  verificationUrl: "https://example.com/verify?token=abc123def456",
};

export default VerifyEmailTemplate;
