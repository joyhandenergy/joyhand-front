"use client";
import { useState, useEffect } from "react";

export default function SafeEmail({ email, fallback = "Email Us" }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a plain span on the server to hide from Cloudflare and bots
    return <span aria-hidden="true">{fallback}</span>;
  }

  // Render the real mailto link on the client
  return <a href={`mailto:${email}`}>{email}</a>;
}
