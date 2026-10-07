import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { BentoGrid } from "@/components/sections/bento-grid";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/json-ld";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";
import { seoConfig } from "@/content/seo";
import { socialLinks } from "@/content/social";
import { getAcademicStatus } from "@/lib/academic-status";
// Date-aware academic status, refreshed daily on a supported Next.js server.
export const revalidate = 86400;
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    url: "/",
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    type: "website",
    images: ["/opengraph-image"],
  },
};
export default async function Home() {
  const academic = await getAcademicStatus();
  const person = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteConfig.siteUrl,
    mainEntity: {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person`,
      name: profile.name,
      url: siteConfig.siteUrl,
      description: `${academic.intro} ${profile.about}`,
      sameAs: socialLinks
        .filter((s) => s.url.startsWith("https:"))
        .map((s) => s.url),
      knowsAbout: [
        "Software development",
        "Machine learning",
        "Data analytics",
        "Python",
        "Java",
        "React",
      ],
      affiliation: {
        "@type": "EducationalOrganization",
        name: "Government Engineering College, Patan",
        parentOrganization: {
          "@type": "CollegeOrUniversity",
          name: "Gujarat Technological University",
        },
      },
      homeLocation: { "@type": "Place", name: profile.location },
    },
  };
  return (
    <main id="main-content" tabIndex={-1}>
      <JsonLd data={person} />
      <Hero academic={academic} />
      <BentoGrid />
      <Projects />
      <Experience />
      <Skills />
      <Education academic={academic} />
      <Contact />
    </main>
  );
}
