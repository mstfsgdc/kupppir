"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DiscordPage() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("https://discord.gg/vsTT3ssdks");
    }, 1);

    return () => clearTimeout(redirectTimeout);
  }, [router]);
  return <div>Discord sunucumuza yönlendiriliyorsunuz...</div>;
}
