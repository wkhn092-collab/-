import type { MetadataRoute } from "next";

const linkPreviewBots = ["facebookexternalhit", "WhatsApp", "TelegramBot", "Twitterbot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: linkPreviewBots, allow: "/d/" },
      { userAgent: "*", disallow: "/" },
    ],
  };
}
