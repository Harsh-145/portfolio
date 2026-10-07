import type { SiteConfig } from "@/types";
// This is the portfolio address listed in the supplied resume. Override when deploying elsewhere.
const configuredUrl = new URL(
  process.env.SITE_URL || "https://harshaydv.netlify.app",
);
if (!["http:", "https:"].includes(configuredUrl.protocol))
  throw new Error("SITE_URL must use HTTP or HTTPS.");
export const siteConfig: SiteConfig = {
  siteName: "Harsh Yadav",
  siteUrl: configuredUrl.origin,
  locale: "en_IN",
};
