"use client";

import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/sections/section";
import { useState } from "react";

const links = [
  {
    label: "Email",
    href: `mailto:${profile.contact.email}`,
    value: profile.contact.email,
    icon: Mail,
  },
  ...(profile.contact.phone ? [{
    label: "Phone",
    href: `tel:${profile.contact.phone}`,
    value: profile.contact.phone,
    icon: Phone,
  }] : []),
  {
    label: "GitHub",
    href: profile.contact.github,
    value: profile.contact.github.replace("https://", ""),
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: profile.contact.linkedin,
    value: profile.contact.linkedin.replace("https://", ""),
    icon: Linkedin,
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="I'm always open to new opportunities and conversations."
    >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: links */}
          <div className="flex flex-col gap-4">
            {links.map(({ label, href, value, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-foreground/10 hover:border-primary/30 hover:shadow-lg transition-all bg-foreground/[0.01]"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-foreground/5 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider opacity-50">{label}</span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Right: contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 rounded-3xl border border-foreground/10 bg-foreground/[0.01]"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-xs uppercase tracking-wider opacity-50">Name</label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-xs uppercase tracking-wider opacity-50">Email</label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs uppercase tracking-wider opacity-50">Message</label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="What's on your mind?"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-foreground/5 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity mt-auto"
            >
              Send message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
    </Section>
  );
}
