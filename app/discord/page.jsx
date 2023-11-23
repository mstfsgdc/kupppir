"use client";

import { useRouter } from "next/navigation";

export default function DiscordPage() {
  const router = useRouter();

  setTimeout(() => {
    router.push("https://discord.gg/vsTT3ssdks");
  }, 1);
  return <div>Discord sunucumuza yönlendiriliyorsunuz...</div>;
}
