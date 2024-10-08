import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/provider/themes-provider";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import BgGradient from "@/components/ui/bg-gradient";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} flex flex-col h-screen`}>
        <BgGradient />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SpeedInsights />
          <Analytics />
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
