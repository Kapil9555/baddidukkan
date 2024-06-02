import type { Metadata } from "next";
import TopLoader from "@/components/Toploader";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from "@/global/Theme";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BadiDukkan",
  description: "Service for you by BadiDukkan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: "0px", padding: "0px",backgroundColor:'black' }}>
        <TopLoader />
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
