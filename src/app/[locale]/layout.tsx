import type { Metadata } from "next";
import React from "react";
import AppProviderBasic from "@/providers/mui/mui_provider";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing,Local } from '@/i18n/routing';
import './globals.css'
import DashboardPagesLayout from "./(dashboard)/layout";
export const metadata: Metadata = {
  title: "ContactPoint360",
  description: "",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Local };
}) {
  // Validate locale
  const {locale}=await params;
  if (!routing.locales.includes(locale as Local)) {
    notFound();
  }

  // Fetch localized messages
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>

        <NextIntlClientProvider messages={messages}>
        <AppProviderBasic>
          <DashboardPagesLayout>
          {children}
          </DashboardPagesLayout>
          </AppProviderBasic>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}