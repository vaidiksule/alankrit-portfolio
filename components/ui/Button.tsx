import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  href: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-inverse border border-accent neon-glow hover:bg-accent-secondary hover:border-accent-secondary hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-accent hover:bg-surface-elevated hover:shadow-[0_0_20px_rgba(0,102,255,0.2)]",
  ghost: "bg-transparent text-muted border border-transparent hover:text-accent-secondary",
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors duration-300",
        variants[variant],
        className,
      )}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
