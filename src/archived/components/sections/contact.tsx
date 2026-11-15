"use client";

import { useRef, useState } from "react";
import { profile } from "@/archived/content/profile";

export default function ContactSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [feedback, setFeedback] = useState("");
  const hasEmail = profile.email.length > 0;

  const open = () => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.querySelector<HTMLElement>(".close")?.focus();
    }
  };

  const copyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("no clipboard");
      await navigator.clipboard.writeText(profile.email);
      setFeedback("Email copied.");
    } catch {
      setFeedback(
        "Select the email address above and copy it with your keyboard or device menu.",
      );
    }
  };

  return (
    <>
      <section
        className="portfolio-section contact"
        id="contact"
        tabIndex={-1}
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title">
          Let’s talk about<span>what’s next.</span>
        </h2>
        <div className="contact-copy">
          <p id="contact-description">
            For opportunities, collaboration, or a conversation about software.
          </p>
          <button
            ref={triggerRef}
            type="button"
            className="button"
            id="contact-button"
            onClick={open}
          >
            Get in touch <span aria-hidden="true">↗</span>
          </button>
        </div>
      </section>
      <dialog
        ref={dialogRef}
        id="contact-dialog"
        aria-labelledby="contact-dialog-title"
        onClose={() => triggerRef.current?.focus()}
        onClick={(event) => {
          const dialog = dialogRef.current;
          if (!dialog || event.target !== dialog) return;
          const rect = dialog.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          ) {
            dialog.close();
          }
        }}
      >
        <div className="dialog-top">
          <h2 id="contact-dialog-title">Get in touch.</h2>
          <button
            type="button"
            id="close-contact"
            className="close"
            aria-label="Close contact information"
            onClick={() => dialogRef.current?.close()}
          >
            ×
          </button>
        </div>
        <p id="contact-dialog-note">
          {hasEmail
            ? "Send me a note about an opportunity, a project, or an idea."
            : "Personal contact information has not been added yet."}
        </p>
        <p className="contact-email" id="contact-email" hidden={!hasEmail}>
          {profile.email}
        </p>
        <div className="contact-actions" id="contact-actions" hidden={!hasEmail}>
          <a className="button" id="email-link" href={`mailto:${profile.email}`}>
            Open email app <span aria-hidden="true">↗</span>
          </a>
          <button
            id="copy-email"
            type="button"
            className="text-link"
            style={{ background: "transparent", border: 0, padding: 0 }}
            onClick={copyEmail}
          >
            Copy email
          </button>
        </div>
        <p className="contact-feedback" id="contact-feedback" role="status">
          {feedback}
        </p>
        <span className="placeholder-label" id="contact-placeholder" hidden={hasEmail}>
          Contact details pending
        </span>
      </dialog>
    </>
  );
}
