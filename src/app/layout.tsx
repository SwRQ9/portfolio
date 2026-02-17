import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Sultan Bahasan - Full-Stack Web Engineer",
  description: "Full-stack web engineer specializing in Next.js, Laravel, and real-time applications. Expert in CRM systems, dashboards, and geospatial web applications.",
  keywords: ["Next.js", "Laravel", "Full-Stack", "Web Engineer", "CRM", "Dashboard", "Real-time Applications"],
  authors: [{ name: "Sultan Bahasan" }],
  openGraph: {
    title: "Sultan Bahasan - Full-Stack Web Engineer",
    description: "Full-stack web engineer specializing in Next.js, Laravel, and real-time applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 antialiased">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
