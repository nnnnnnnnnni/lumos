import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider >{children}</MantineProvider>
      </body>
    </html>
  );
}