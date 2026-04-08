import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot
    if ((data.get("bot-field") as string)?.length) {
      setStatus("success");
      return;
    }

    const payload: Record<string, string> = {
      "form-name": "contact",
      name: (data.get("name") as string) || "",
      email: (data.get("email") as string) || "",
      message: (data.get("message") as string) || "",
    };

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        "Omlouváme se, zprávu se nepodařilo odeslat. Zkuste to prosím znovu nebo nám napište přímo na e-mail.",
      );
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid var(--color-border)",
    borderRadius: "8px",
    backgroundColor: "var(--color-white)",
    color: "var(--color-text)",
    fontSize: "16px",
    fontFamily: "inherit",
    transition: "border-color 200ms ease, box-shadow 200ms ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "14px",
    fontWeight: 700,
    color: "var(--color-dark)",
    marginBottom: "6px",
  };

  if (status === "success") {
    return (
      <div
        className="card"
        style={{
          backgroundColor: "var(--color-primary-bg)",
          borderColor: "var(--color-primary-pale)",
        }}
      >
        <h3 style={{ color: "var(--color-dark)", fontSize: "1.375rem" }}>
          Děkujeme za zprávu.
        </h3>
        <p style={{ color: "var(--color-text)", marginTop: "12px" }}>
          Ozveme se vám co nejdřív — obvykle do dvou pracovních dní.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-5"
        >
          Napsat další zprávu
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card"
      style={{ backgroundColor: "var(--color-white)" }}
      noValidate
    >
      {/* Netlify form plumbing */}
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: "none" }}>
        <label>
          Nevyplňujte, prosím: <input name="bot-field" />
        </label>
      </p>

      <div style={{ display: "grid", gap: "18px" }}>
        <div>
          <label htmlFor="contact-name" style={labelStyle}>
            Jméno
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="contact-email" style={labelStyle}>
            E-mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="contact-message" style={labelStyle}>
            Zpráva
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
          />
        </div>

        {status === "error" && errorMessage && (
          <p
            role="alert"
            style={{
              color: "#8a1d1d",
              backgroundColor: "#fbeaea",
              border: "1px solid #f1c7c7",
              padding: "12px 14px",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "submitting"}
          style={{ justifySelf: "start" }}
        >
          {status === "submitting" ? "Odesíláme…" : "Odeslat zprávu"}
        </button>

        <p
          style={{
            fontSize: "13px",
            color: "var(--color-text-light)",
            margin: 0,
          }}
        >
          Odesláním souhlasíte se zpracováním osobních údajů pro účely
          odpovědi na váš dotaz.
        </p>
      </div>
    </form>
  );
}
