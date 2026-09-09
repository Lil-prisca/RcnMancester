import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Safeguarding page — RCN Manchester
 *
 * Assumptions (adjust to match your actual project setup):
 * - React + Tailwind, no external UI library
 * - Drop into your pages/routes folder and wire up at whatever path
 *   you're using for the footer's "Safeguarding" link (e.g. /safeguarding)
 * - The full Safeguarding Policy document lives at SAFEGUARDING_POLICY_URL
 *   below — point it at wherever you end up hosting that PDF/doc
 * - Colours are set as CSS variables at the top of the component so you
 *   can swap them for your real brand tokens in one place
 */

const SAFEGUARDING_POLICY_URL = "./policy";

const COMMITMENTS = [
  "Maintain a safe environment for everyone who participates in our activities.",
  "Respond appropriately and promptly to safeguarding concerns, disclosures and allegations.",
  "Ensure those entrusted with relevant responsibilities are appropriately selected, supported and, where required, DBS checked.",
  "Promote appropriate boundaries and responsible conduct among leaders, workers and volunteers.",
  "Work with statutory safeguarding authorities and other relevant organisations when necessary.",
  "Regularly review our safeguarding arrangements and practices.",
];

export default function SafeguardingPage() {
  useEffect(() => {
    document.title = "Safeguarding — RCN Manchester";
  }, []);

  return (
    <main
      style={{
        // Swap these for your real brand palette
        "--sg-ink": "#20293A",
        "--sg-ink-soft": "#5C6577",
        "--sg-bg": "#FBFAF6",
        "--sg-line": "#E3DFD2",
        "--sg-accent": "#8B6A32",
        "--sg-accent-soft": "#F2EAD8",
        "--sg-urgent": "#A23B2E",
        "--sg-urgent-bg": "#FBEDEA",
      }}
      className="min-h-screen"
    >
      <div
        className="max-w-2xl mx-auto px-6 py-16 md:py-24"
        style={{ color: "var(--sg-ink)", backgroundColor: "var(--sg-bg)" }}
      >
        <Navbar />
        {/* Intro */}
        <header className="mb-12">
          <p
            className="text-sm font-medium mb-3"
            style={{ color: "var(--sg-accent)" }}
          >
            RCN Manchester
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Safeguarding
          </h1>
          <p
            className="leading-relaxed"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            At RCN Manchester, we are committed to creating a safe, welcoming
            and caring environment for everyone who attends our services,
            programmes and activities.
          </p>
          <p
            className="leading-relaxed mt-4"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            We believe that every person is made in the image of God and should
            be treated with dignity, respect and care. Safeguarding is therefore
            an important part of our responsibility as a Christian community.
          </p>
        </header>

        {/* Immediate danger — urgent callout, placed early on purpose */}
        <div
          className="rounded-lg p-5 mb-12 border"
          style={{
            backgroundColor: "var(--sg-urgent-bg)",
            borderColor: "var(--sg-urgent)",
          }}
        >
          <h2
            className="font-semibold mb-1.5"
            style={{ color: "var(--sg-urgent)" }}
          >
            If someone is in immediate danger
          </h2>
          <p
            className="leading-relaxed text-sm"
            style={{ color: "var(--sg-ink)" }}
          >
            If you believe that a child or adult is in immediate danger or at
            risk of serious harm, call{" "}
            <a
              href="tel:999"
              className="font-semibold underline underline-offset-2"
              style={{ color: "var(--sg-urgent)" }}
            >
              999
            </a>
            . Where appropriate, safeguarding concerns may also be referred to
            the relevant local authority safeguarding service or the police.
          </p>
        </div>

        {/* Our commitment */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-semibold mb-4">
            Our commitment
          </h2>
          <p
            className="leading-relaxed mb-5"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            RCN Manchester is committed to safeguarding children, young people
            and adults at risk. We seek to:
          </p>
          <ul className="space-y-3">
            {COMMITMENTS.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--sg-accent)" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Reporting a concern */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-semibold mb-4">
            Reporting a safeguarding concern
          </h2>
          <p
            className="leading-relaxed mb-5"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            If you are concerned about the safety or wellbeing of a child, young
            person or adult at risk, or about something that has happened within
            an RCN Manchester activity, please contact our safeguarding team.
          </p>

          <div
            className="rounded-lg p-5 border grid gap-4 sm:grid-cols-2"
            style={{
              backgroundColor: "var(--sg-accent-soft)",
              borderColor: "var(--sg-line)",
            }}
          >
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-1"
                style={{ color: "var(--sg-accent)" }}
              >
                Designated Safeguarding Lead
              </p>
              <p>Sarah Agbike</p>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-1"
                style={{ color: "var(--sg-accent)" }}
              >
                Deputy Designated Safeguarding Lead
              </p>
              {/* TODO: fill in once Bro Layò sends the DDSL's name */}
              <p style={{ color: "var(--sg-ink-soft)" }}>Coming soon</p>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-1"
                style={{ color: "var(--sg-accent)" }}
              >
                Email
              </p>
              {/* TODO: fill in once Bro Layò sends the safeguarding email */}
              <p style={{ color: "var(--sg-ink-soft)" }}>Coming soon</p>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-1"
                style={{ color: "var(--sg-accent)" }}
              >
                Telephone
              </p>
              {/* TODO: fill in once Bro Layò sends the safeguarding phone number */}
              <p style={{ color: "var(--sg-ink-soft)" }}>Coming soon</p>
            </div>
          </div>

          <p
            className="leading-relaxed mt-5 text-sm"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            You do not need to be certain that abuse or harm has occurred before
            raising a concern. If something does not feel right, we encourage
            you to report it.
          </p>
        </section>

        {/* Confidentiality */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-semibold mb-4">
            Confidentiality
          </h2>
          <p
            className="leading-relaxed mb-3"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            Safeguarding information will be handled sensitively and shared only
            where necessary to protect an individual, respond appropriately to a
            concern, or fulfil our safeguarding and legal responsibilities.
          </p>
          <p
            className="leading-relaxed"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            We cannot promise absolute confidentiality where someone may be at
            risk of harm.
          </p>
        </section>

        {/* Children and young people */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-semibold mb-4">
            Children and young people
          </h2>
          <p
            className="leading-relaxed mb-3"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            We want children and young people to participate in church life in a
            safe and supportive environment.
          </p>
          <p
            className="leading-relaxed mb-3"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            Those entrusted with responsibilities involving children and young
            people are expected to follow our safeguarding procedures and
            appropriate codes of conduct. Where applicable, appropriate
            recruitment and DBS checking procedures will be followed.
          </p>
          <p
            className="leading-relaxed"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            Parents and carers are encouraged to speak to a member of the team
            if they have any questions or concerns about their child's
            participation in our activities.
          </p>
        </section>

        {/* Adults at risk */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-semibold mb-4">
            Adults at risk
          </h2>
          <p
            className="leading-relaxed mb-3"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            We recognise that adults can also experience abuse, exploitation,
            neglect or other forms of harm.
          </p>
          <p
            className="leading-relaxed"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            We are committed to responding appropriately to concerns while
            respecting the dignity, wishes and circumstances of the individual
            and fulfilling our responsibility to protect people from harm.
          </p>
        </section>

        {/* Full policy link */}
        <section
          className="rounded-lg p-6 border text-center"
          style={{ borderColor: "var(--sg-line)" }}
        >
          <h2 className="font-serif text-lg font-semibold mb-2">
            Our safeguarding policy
          </h2>
          <p
            className="leading-relaxed mb-5 text-sm"
            style={{ color: "var(--sg-ink-soft)" }}
          >
            Our full Safeguarding Policy sets out the procedures and
            responsibilities that support our safeguarding arrangements.
          </p>
          <a
            href={SAFEGUARDING_POLICY_URL}
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 rounded-md font-medium text-sm text-white"
            style={{ backgroundColor: "var(--sg-accent)" }}
          >
            View our Safeguarding Policy
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}
