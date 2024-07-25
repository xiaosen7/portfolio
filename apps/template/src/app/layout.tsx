import { createUserIfNeeded } from "@/libs/actions/user";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { cn } from "@npc/shared/jsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Npc Template",
  description: "A template project in next.js-practical-cases",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await createUserIfNeeded();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, "flex flex-col h-screen")}>
          <header className="flex items-center gap-5 border-b p-5">
            <UserButton />

            <Link href={"/profile"}>Profile</Link>

            <Link href={"/"}>Home</Link>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center overflow-scroll">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
