import { ThemeProvider } from "@providers/theme-provider";
import "./globals.css";
import { Inter } from 'next/font/google'


export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
      <ThemeProvider 
        attribute="class" 
        defaultTheme="system" 
        enableSystem
      >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
