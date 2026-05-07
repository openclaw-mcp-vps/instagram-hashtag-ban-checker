import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instagram Hashtag Ban Checker — Check if hashtags are shadowbanned",
  description: "Test hashtag visibility and reach to identify shadowbanned tags before posting. Built for Instagram creators, social media managers, and agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="39ec8c14-3a77-49b1-bbc1-0cd989435d4b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
