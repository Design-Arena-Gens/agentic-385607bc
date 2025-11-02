import Image from "next/image";

const features = [
  {
    title: "Autonomous Delivery",
    body: "Skip the back-and-forth. Get production-ready interfaces the moment you describe them."
  },
  {
    title: "Design-Led Defaults",
    body: "Typography, spacing, and contrast tuned for clarity on every screen size."
  },
  {
    title: "Ship to Vercel",
    body: "Optimized for instant deployment with preview and production environments ready out of the box."
  }
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__text">
          <p className="hero__eyebrow">Hello.</p>
          <h1>Instant experiences from a single prompt.</h1>
          <p className="hero__subtitle">
            Codex assembles modern web applications autonomously. Drop in your idea and
            deploy a polished Next.js experience without touching a single config file.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#features">
              Explore features
            </a>
            <a className="button button--ghost" href="#story">
              How it works
            </a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden>
          <div className="floating-card">
            <span className="floating-card__badge">Ready in minutes</span>
            <h2>Launch-ready UI</h2>
            <p>
              Opinionated defaults, accessible patterns, and performance best practices baked in.
            </p>
            <Image
              src="/grid.svg"
              alt="Decorative grid"
              width={320}
              height={180}
              priority
            />
          </div>
        </div>
      </section>

      <section id="features" className="features">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </section>

      <section id="story" className="story">
        <div>
          <h2>Autonomous build flow</h2>
          <p>
            The agent translates simple direction into a complete Next.js application, installs
            dependencies, validates the build, and ships to production on Vercel. The result is a
            dependable pipeline that respects your time and launches reliably.
          </p>
        </div>
        <div className="story__callout">
          <strong>Zero guesswork.</strong>
          <span>All decisions handled for you—from architecture to copywriting.</span>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Autonomous Delivery</span>
        <a href="https://vercel.com" target="_blank" rel="noreferrer">
          Deploy on Vercel
        </a>
      </footer>
    </main>
  );
}
