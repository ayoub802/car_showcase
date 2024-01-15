"use client"

import { ThemeProvider } from "@providers/theme-provider";
import "./globals.css";
import { Inter } from 'next/font/google'
import i18next from 'i18next'
import global_en from "./translation/en/globale.json"
import global_fr from "./translation/fr/globale.json"
import { I18nextProvider } from 'react-i18next'
import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'
import { PreviewModalProvider } from '@/providers/preview-modal-provider'
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PreviewModalCheckoutProvider } from "@providers/checkout-modal-provider";


const inter = Inter({ subsets: ['latin'] })
i18next.init({
  interpolation: {escapeValue: false},
  lng: 'fr',
  resources:{
    en: {
      global: global_en
    },
    fr: {
      global: global_fr
    }
  }

})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18next}>
      <ClerkProvider>
        <html lang='en'>
          <body className={inter.className}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="dark" 
            enableSystem
          >
            <ToastProvider />
            <ModalProvider />
            <PreviewModalProvider />
            <PreviewModalCheckoutProvider />
            {children}
            </ThemeProvider>
            <SpeedInsights />
          </body>
        </html>
      </ClerkProvider>
    </I18nextProvider>
  );
}
