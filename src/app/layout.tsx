import type { Metadata } from "next";
import { AuthProvider } from '@/lib/auth-context';
import './globals.scss';

export const metadata: Metadata = {
  title: "Authentication System",
  description: "Simple auth system with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="fa" dir="rtl">
      <body className={`antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
