// sections/Contact.jsx

import ContactLink from "./ContactLink";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Contact({ data }) {
  const links = [
    {
      icon: "✉",
      label: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
    },
    { icon: "☎", label: "Phone", value: data.phone, href: `tel:${data.phone}` },
    {
      icon: "⌥",
      label: "GitHub",
      value: `github.com/${data.github.split("/").pop()}`,
      href: data.github,
    },
    {
      icon: "in",
      label: "LinkedIn",
      value: `linkedin.com/in/${data.linkedin.split("/").pop()}`,
      href: data.linkedin,
    },
  ];

  return (
    <Section id="contact">
      <div className="wrapper">
        <SectionHeader label="05 — Contact" title="Let's connect" />
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {links.map((l) => (
            <ContactLink
              key={l.label}
              icon={l.icon}
              label={l.label}
              value={l.value}
              href={l.href}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
