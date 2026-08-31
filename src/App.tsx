import { FormEvent, useEffect, useState } from "react";

// Free contact-form backend via Web3Forms (https://web3forms.com) — no signup flow,
// no server needed. Get a free access key at web3forms.com and paste it below.
const WEB3FORMS_ACCESS_KEY = "9afdab82-8181-4b1a-a655-2b7fbbb6e711";

// Prefix for anything in /public so links resolve correctly under the GitHub Pages
// base path (see vite.config.ts). Always use `asset("assets/x.png")`.
const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const projects = [
  {
    number: "01",
    name: "TheRidaStories53",
    type: "Client Website",
    description:
      "A fashion storefront for browsing a curated clothing collection, with orders taken directly through WhatsApp. An Admin Panel is also built with dashboard to manage the products and collections and overall website.",
    tags: ["Website", "E-commerce", "Client Project"],
    link: "https://theridastories53.vercel.app",
  },
  {
    number: "02",
    name: "BizMate",
    type: "Web Application",
    description:
      "A modern business management web application focused on bringing everyday business workflows into one practical digital experience.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://mybizmate.vercel.app",
  },
  {
    number: "03",
    name: "Mustafa Bakhtawary — Portfolio",
    type: "Personal Portfolio",
    description:
      "A personal portfolio site for a business development and sales professional, built to reflect his work bridging business, technology and client relationships.",
    tags: ["Website", "Personal Branding"],
    link: "https://bakhtawary-portfolio.vercel.app",
  },
  {
    number: "04",
    name: "UtilVerse",
    type: "Utility Application",
    description:
      "A multi-utility application bringing useful everyday tools into one simple, accessible platform.",
    tags: ["Mobile", "Utilities", "Product"],
    link: asset("/assets/utilverse.apk"),
  },
];

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Responsive websites and polished digital experiences for businesses, professionals and brands.",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Focused landing pages built to communicate clearly and move visitors toward action.",
  },
  {
    number: "03",
    title: "Web Applications",
    description:
      "Custom dashboards, management systems and practical web applications built around your workflow.",
  },
  {
    number: "04",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile experiences designed for Android and iOS.",
  },
  // {
  //   number: "05",
  //   title: "Custom Development",
  //   description:
  //     "Feature development, integrations, maintenance and improvements for existing products.",
  // },
];

const process = [
  ["01", "Discuss", "Understand the idea, requirements and goals."],
  ["02", "Plan", "Define the scope, features and development approach."],
  [
    "03",
    "Build",
    "Turn the plan into a working product with clear communication.",
  ],
  ["04", "Launch", "Test, deploy and hand over the finished experience."],
];

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

function ArrowUp() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 13V3M8 3L3.5 7.5M8 3L12.5 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New inquiry from HMCreations53");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a
            className="nav-brand"
            href="#top"
            onClick={closeMenu}
            aria-label="HMCreations53 home"
          >
            <img
              className="nav-brand-icon"
              src={asset("assets/favicon-green.png")}
              alt=""
            />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div
            id="main-menu"
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
          >
            {["Work", "Services", "Process", "About"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Start a Project <ArrowUpRight />
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> DIGITAL STUDIO / HMCREATIONS53
              </p>
              <h1>
                Ideas.
                <br />
                <em>Engineered.</em>
              </h1>
              <p className="hero-text">
                Websites, applications and custom digital experiences built
                around real-world needs — with clarity, purpose and attention to
                detail.
              </p>

              <div className="hero-actions">
                <a className="button button-dark" href="#work">
                  View My Work <ArrowUpRight />
                </a>
                <a className="button button-ghost" href="#contact">
                  Start a Project <ArrowUpRight />
                </a>
              </div>

              <div className="hero-meta">
                <span>WEB</span>
                <span className="hero-meta-seperator">|</span>
                <span>MOBILE</span>
                <span className="hero-meta-seperator">|</span>
                <span>CUSTOM DEVELOPMENT</span>
              </div>
            </div>

            <div className="hero-brand-card">
              <div className="hero-card-line" />
              <img
                src={asset("assets/logo-full.png")}
                alt="HMCreations53 — Ideas. Engineered."
              />
              <div className="hero-card-corner hero-card-corner-a" />
              <div className="hero-card-corner hero-card-corner-b" />
            </div>
          </div>

          <a
            className="scroll-cue"
            href="#work"
            aria-label="Scroll to selected work"
          >
            <span>SCROLL TO EXPLORE</span>
            <b>↓</b>
          </a>
        </section>

        <section className="statement section-light">
          <div className="container statement-grid">
            <p className="section-index">01 / APPROACH</p>
            <div>
              <h2>
                Built around <span>your problem.</span>
              </h2>
              <p className="statement-copy">
                Good development starts before the first line of code. I focus
                on understanding what you are trying to achieve, then turn that
                understanding into a practical digital product.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="work section-dark">
          <div className="container">
            <div className="section-heading light">
              <div>
                <p className="section-index">02 / SELECTED WORK</p>
                <h2>
                  Things I've
                  <br />
                  <span>built.</span>
                </h2>
              </div>
              <p className="section-intro">
                A selection of projects across client work, web applications and
                useful digital products.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-top">
                    <span>{project.number}</span>
                    <span>{project.type}</span>
                  </div>
                  <div className="project-main">
                    <div>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <a
                        className="project-arrow"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ArrowUpRight />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services section-light">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-index">03 / SERVICES</p>
                <h2>
                  What I can
                  <br />
                  <span>build for you.</span>
                </h2>
              </div>
              <p className="section-intro">
                Focused development services for ideas that need to become real,
                useful digital experiences.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-mark">✦</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="process section-cream-dark">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-index">04 / PROCESS</p>
                <h2>
                  Simple by
                  <br />
                  <span>design.</span>
                </h2>
              </div>
              <p className="section-intro">
                A straightforward process keeps the work focused and the
                communication clear from first conversation to launch.
              </p>
            </div>

            <div className="process-grid">
              {process.map(([number, title, description]) => (
                <article key={number} className="process-card">
                  <span>{number}</span>
                  <div className="process-line" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about section-light">
          <div className="container about-grid">
            <div className="about-mark">
              <img src={asset("assets/logo-icon-light.png")} alt="" />
            </div>
            <div>
              <p className="section-index">05 / ABOUT</p>
              <h2>
                A developer who
                <br />
                <span>thinks beyond code.</span>
              </h2>
              <p>
                I'm Husain, a developer building websites, applications and
                digital products for clients and businesses. HMCreations53
                brings together development, problem-solving and practical
                product thinking.
              </p>
              <div className="about-points">
                <span>FULL-STACK DEVELOPMENT</span>
                <span>WEB & MOBILE</span>
                <span>REMOTE / WORLDWIDE</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-dark">
          <div className="contact-grid" aria-hidden="true" />
          <div className="container contact-inner">
            <div>
              <p className="section-index light-index">06 / CONTACT</p>
              <h2>
                Have something
                <br />
                <em>in mind?</em>
              </h2>
              <p className="contact-copy">
                Tell me what you're trying to build. We can start with the idea,
                figure out what it needs, and take it from there.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Your name</span>
                <input required name="name" placeholder="Jane Smith" />
              </label>
              <label>
                <span>Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                />
              </label>
              <label>
                <span>Tell me about the project</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="What are you looking to build?"
                />
              </label>
              {/* Honeypot Bot Trap */}
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
              />
              <button
                className="button button-gold"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sent"
                  ? "Message Sent ✓"
                  : status === "sending"
                    ? "Sending…"
                    : "Start the Conversation"}{" "}
                <ArrowUpRight />
              </button>
              {status === "sent" && (
                <p className="form-note">
                  Thanks — your message is on its way. I'll get back to you
                  soon.
                </p>
              )}
              {status === "error" && (
                <p className="form-note form-note-error">
                  Something went wrong sending that. Please try again, or reach
                  out directly.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <img
              className="footer-brand-icon"
              src={asset("assets/logo-icon-light.png")}
              alt=""
            />
            <div>
              <span className="footer-brand-name">HMCreations53</span>
              <span className="footer-brand-tagline">Ideas. Engineered.</span>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <span className="footer-label">EXPLORE</span>
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#about">About</a>
            </div>
            <div>
              <span className="footer-label">CONNECT</span>
              <a href="#contact">Start a Project ↗</a>
              <a href="mailto:hmcreations53@gmail.com">Email ↗</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} HMCreations53</span>
          <span>Ideas. Engineered.</span>
          <span>Designed & developed by HMCreations53 ↗</span>
        </div>
      </footer>

      <button
        type="button"
        className={`scroll-top ${showScrollTop ? "is-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    </div>
  );
}

export default App;
