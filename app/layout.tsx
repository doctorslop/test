import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Streamyfin — Modern Jellyfin Client",
  description:
    "A cinematic, design-led Jellyfin client for self-hosters, media lovers, and developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
