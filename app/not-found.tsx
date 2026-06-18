import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-tertiary">
        404
      </p>
      <h1 className="mt-4 font-display text-display-md uppercase text-foreground">
        Frame Not Found
      </h1>
      <p className="mt-4 text-body">This cut doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 border border-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-accent hover:text-inverse"
      >
        Back to Home
      </Link>
    </div>
  );
}
