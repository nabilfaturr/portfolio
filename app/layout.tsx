import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fafafa] max-w-5xl mx-auto p-4`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
