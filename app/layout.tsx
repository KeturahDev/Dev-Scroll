import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Scroll",
  description: "A better place to scroll as a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          accentColor="yellow"
          grayColor="sand"
          radius="small"
          appearance="dark"
        >
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
