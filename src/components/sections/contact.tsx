import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social";
export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="eyebrow">05 / Let’s connect</p>
        <div className="contact-grid">
          <div>
            <h2>
              Have a problem
              <br />
              worth solving<span>?</span>
            </h2>
            <p>
              I’m looking for internships in software development, machine
              learning, and data analytics, and graduate opportunities aligned
              with my expected May 2027 graduation.
            </p>
            <a className="button button-light" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Get in touch
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-details">
            <span className="eyebrow">Contact details</span>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
            <p>{profile.location}</p>
            <div className="contact-socials">
              {socialLinks
                .filter((s) => s.platform !== "Email")
                .map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.platform}
                    <ArrowUpRight size={15} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
