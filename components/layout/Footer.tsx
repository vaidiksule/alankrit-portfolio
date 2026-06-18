import { siteContent } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-elevated px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          © {year} {siteContent.profile.name}
        </p>
        <p className="font-mono text-xs text-accent-tertiary">
          {siteContent.profile.location}
        </p>
      </div>
    </footer>
  );
}
