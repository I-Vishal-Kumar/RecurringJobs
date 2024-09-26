'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import TimeContextProvider from "./hooks/timeContext";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TimeContextProvider>
          <body className={inter.className}>{children}</body>
      </TimeContextProvider>
    </html>
  );
}
