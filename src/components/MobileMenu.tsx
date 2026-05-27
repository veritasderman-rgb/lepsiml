import { useEffect, useState } from "react";

type NavLink = { label: string; href: string };

type Props = {
  links: NavLink[];
  pathname?: string;
};

export default function MobileMenu({ links, pathname = "/" }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Otevřít menu"
        aria-expanded={open}
        className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-white hover:bg-white/10 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[90] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Hlavní menu"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #000000 0%, #0a1a18 100%)",
            }}
          />
          <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-between px-5 pt-5">
              <span
                className="flex items-center gap-2.5 text-white font-extrabold text-lg tracking-tight"
                style={{ letterSpacing: "-0.01em" }}
              >
                <img
                  src="/logo.jpg"
                  width={32}
                  height={32}
                  alt=""
                  aria-hidden="true"
                  style={{ display: "block", filter: "invert(1)" }}
                />
                <span
                  style={{
                    fontFamily:
                      '"Bebas Neue", Impact, "Arial Black", sans-serif',
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    fontSize: "20px",
                  }}
                >
                  Za lepší Mariánské Lázně
                </span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Zavřít menu"
                className="inline-flex items-center justify-center w-11 h-11 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-white"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.12)",
                      color: active ? "var(--color-pirate)" : "#ffffff",
                      fontFamily:
                        '"Bebas Neue", Impact, "Arial Black", sans-serif',
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      fontSize: "40px",
                      lineHeight: 1,
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="px-8 pb-10">
              <a
                href="/program"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
                style={{ width: "100%" }}
              >
                Náš program
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
