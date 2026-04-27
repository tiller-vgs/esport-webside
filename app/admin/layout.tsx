import { ThemeProvider } from "@/components/ThemeProvider";
import { DM_Sans } from "next/font/google";
import "../globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
