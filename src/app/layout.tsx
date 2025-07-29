import type { Metadata } from "next";

import AppNavbar from "@/components/app-navbar";
import Providers from "@/components/providers";
import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";

import "./globals.css";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className="flex h-screen w-screen flex-col">
        <Providers>
          <AppNavbar />
          <main className="flex-grow overflow-auto bg-[url(/light-bg.svg)] bg-cover bg-repeat dark:bg-[url(/dark-bg.svg)]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
