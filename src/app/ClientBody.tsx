"use client";

import { useEffect } from "react";
import CookieConsent from "@/components/CookieConsent";
import LiveChatWidget from "@/components/LiveChatWidget";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="antialiased">
      {children}
      <CookieConsent />
      <LiveChatWidget />
    </div>
  );
}
