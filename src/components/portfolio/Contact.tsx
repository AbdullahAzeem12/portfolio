
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { GITHUB_URL, LINKEDIN_URL } from "./data";
import { GithubIcon, LinkedinIcon } from "./icons";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,18}$/;

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  // Validate all required contact form fields.
  function validate(): boolean {
    const next: Errors = {};

    if (name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }

    if (!EMAIL_RE.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (!PHONE_RE.test(phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  // Send contact details to the configured Web3Forms email.
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    if (!validate()) {
      toast.error("Please fix the highlighted fields and try again.");
      return;
    }

  const accessKey = "59443a45-e464-4a49-a37f-f65d69d706f0";

    if (!accessKey) {
      toast.error("Contact form is not configured yet.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim() || "No additional message provided.",
          subject: `New Portfolio Contact Message from ${name.trim()}`,
          from_name: "Abdullah Azeem Portfolio",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.message || "Unable to send your message. Please try again."
        );
      }

      setStatus("success");

      toast.success("Message sent successfully!", {
        description: "Thank you! Abdullah will get back to you soon.",
      });

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
    } catch (err) {
      setStatus("error");

      toast.error(
        err instanceof Error
          ? err.message
          : "Network error. Please check your connection and try again."
      );
    }
  }

  // Reset submission status when the user edits a field.
  function handleFieldChange(
    setter: (value: string) => void,
    value: string
  ) {
    setter(value);
    setStatus("idle");
  }

  // Build consistent Tailwind classes for form inputs.
  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-all focus:bg-white/[0.05] focus:ring-2 ${
      hasError
        ? "border-red-900/70 focus:border-red-700 focus:ring-red-900/40"
        : "border-white/10 focus:border-white/35 focus:ring-white/15"
    }`;

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 bg-[#090909] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="contact"
          title="Let's build something great together"
          description="Have a mobile app idea, a role to fill or a collaboration in mind? Send your details and I will get back to you as soon as possible."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="space-y-4 lg:col-span-2">
            <Reveal>
              <div className="card-surface card-surface-hover rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-neutral-200">
                    <MessageSquare className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="font-display text-base font-semibold text-neutral-100">
                      Direct channels
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Prefer social? Reach me on either platform below.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-2.5">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-neutral-300 transition-colors hover:border-white/35 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-3">
                      <GithubIcon className="h-4 w-4" />
                      github.com/AbdullahAzeem12
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-neutral-300 transition-colors hover:border-white/35 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-3">
                      <LinkedinIcon className="h-4 w-4" />
                      linkedin.com/in/abdullah-azeem
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-surface card-surface-hover rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-neutral-200">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="font-display text-base font-semibold text-neutral-100">
                      Based in Lahore, Pakistan
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                      Working remotely with clients and teams worldwide.
                      Typical response time is under 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-dashed border-white/10 p-6">
                <p className="font-mono text-xs tracking-[0.25em] text-neutral-500">
                  WHAT HAPPENS NEXT
                </p>

                <ol className="mt-4 space-y-3 text-sm text-neutral-400">
                  <li className="flex gap-3">
                    <span className="font-mono text-neutral-600">01</span>
                    You send your name, email and phone number.
                  </li>

                  <li className="flex gap-3">
                    <span className="font-mono text-neutral-600">02</span>
                    Your message is delivered to my email inbox.
                  </li>

                  <li className="flex gap-3">
                    <span className="font-mono text-neutral-600">03</span>
                    I reply to schedule a call and discuss your project.
                  </li>
                </ol>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-surface card-surface-hover rounded-2xl p-7 sm:p-9"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-xs tracking-[0.2em] uppercase text-neutral-400"
                  >
                    Name <span className="text-neutral-600">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) =>
                      handleFieldChange(setName, e.target.value)
                    }
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    className={inputClass(Boolean(errors.name))}
                    required
                  />

                  {errors.name && (
                    <p
                      id="contact-name-error"
                      className="mt-2 text-xs text-red-400"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-mono text-xs tracking-[0.2em] uppercase text-neutral-400"
                  >
                    Email <span className="text-neutral-600">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) =>
                      handleFieldChange(setEmail, e.target.value)
                    }
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                    className={inputClass(Boolean(errors.email))}
                    required
                  />

                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className="mt-2 text-xs text-red-400"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block font-mono text-xs tracking-[0.2em] uppercase text-neutral-400"
                >
                  Phone Number <span className="text-neutral-600">*</span>
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+92 3XX XXXXXXX"
                  value={phone}
                  onChange={(e) =>
                    handleFieldChange(setPhone, e.target.value)
                  }
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "contact-phone-error" : undefined
                  }
                  className={inputClass(Boolean(errors.phone))}
                  required
                />

                {errors.phone && (
                  <p
                    id="contact-phone-error"
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-xs tracking-[0.2em] uppercase text-neutral-400"
                >
                  Message <span className="text-neutral-600">(optional)</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, timeline and budget"
                  value={message}
                  onChange={(e) =>
                    handleFieldChange(setMessage, e.target.value)
                  }
                  className={`${inputClass(false)} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-shine mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-52"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending your message
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="mt-4 text-xs leading-relaxed text-neutral-600">
                Your details are sent securely through Web3Forms and used only
                to respond to your enquiry.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
