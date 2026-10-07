import Link from "next/link";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <Link href="/" className="wordmark" aria-label="Harsh Yadav home">
            HY<span>.</span>
          </Link>
          <p>
            {profile.name}
            <br />
            Software development & machine learning
          </p>
        </div>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target={link.url.startsWith("https") ? "_blank" : undefined}
              rel={
                link.url.startsWith("https") ? "noopener noreferrer" : undefined
              }
            >
              {link.platform}
              {link.url.startsWith("https") && (
                <span className="sr-only"> (opens in a new tab)</span>
              )}
            </a>
          ))}
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} Harsh Yadav
          <br />
          Built with care, curiosity, and Next.js.
        </p>
      </div>
    </footer>
  );
}
