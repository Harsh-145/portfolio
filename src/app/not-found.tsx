import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="container not-found">
      <p className="eyebrow">404 / Page not found</p>
      <h1>
        This page took
        <br />a different path.
      </h1>
      <p>Explore the projects or return to the homepage.</p>
      <Link href="/" className="button button-primary">
        Back to home →
      </Link>
    </main>
  );
}
