"use client"
import "./globals.css";
import {useEffect} from "react";
import Script from "next/script";



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </html>
  );
}
