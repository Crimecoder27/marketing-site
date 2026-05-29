import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/lib/auth-context";

export const metadata: Metadata = {
  title: "ShopDeals India — Premium Affiliate Products",
  description: "Discover handpicked deals from Amazon, Flipkart, Myntra and more.",
  keywords: "affiliate products, Amazon deals, Flipkart offers, Myntra fashion, India shopping",
  openGraph: { title: "ShopDeals India", description: "Handpicked deals from top platforms", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body>
        <AuthProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "rgba(15,26,26,0.95)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(115,209,211,0.2)",
                color: "#f0fafa",
                fontSize: "14px",
              },
              success: { iconTheme: { primary: "#73D1D3", secondary: "#0a0f0f" } },
              error:   { iconTheme: { primary: "#DBA380", secondary: "#0a0f0f" } },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
