import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSent(true);
  };

  return (
    <div className="container-narrow" style={{ paddingBottom: '80px', paddingTop: '32px' }}>
      <header className="entry-header" style={{ marginBottom: '32px' }}>
        <h1
          className="entry-title"
          style={{
            fontFamily: "'canada-type-gibson', sans-serif",
            fontSize: '2.5rem',
            fontWeight: 700,
            margin: 0,
            color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))',
          }}
        >
          💌 Contact
        </h1>
      </header>

      {/* Verbatim text from awake-in.com */}
      <div className="entry-content" style={{ fontSize: '20px', lineHeight: '1.65', marginBottom: '32px' }}>
        <p>
          It would be great to hear from you! Email{' '}
          <a href="mailto:us@awake-in.com" className="ek-link" style={{ color: 'var(--theme-palette-color-1, #624aca)' }}>
            us@awake-in.com
          </a>{' '}
          or use our form:
        </p>
      </div>

      {/* Contact Form 7 [contact-form-7 id="4039" title="Contact form 1"] */}
      <div className="wpcf7" id="wpcf7-f4039-p3569-o1" style={{ maxWidth: '640px' }}>
        {sent ? (
          <div
            className="wpcf7-response-output"
            style={{
              padding: '16px 24px',
              borderRadius: '8px',
              backgroundColor: 'var(--md-sys-color-surface-container-high)',
              border: '2px solid var(--theme-palette-color-2, #33a370)',
              color: 'var(--theme-palette-color-4, rgba(44, 62, 80, 1))',
              fontSize: '18px',
              fontFamily: "'canada-type-gibson', sans-serif",
            }}
          >
            Thank you for your message. It has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="wpcf7-form" noValidate>
            {/* Your Name (required) */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  fontFamily: "'canada-type-gibson', sans-serif",
                }}
              >
                Your Name (required)
              </label>
              <input
                type="text"
                name="your-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '18px',
                  borderRadius: '6px',
                  border: '1px solid var(--md-sys-color-outline)',
                  backgroundColor: 'var(--md-sys-color-surface)',
                  color: 'var(--md-sys-color-on-surface)',
                  outline: 'none',
                }}
              />
            </div>

            {/* Your Email (required) */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  fontFamily: "'canada-type-gibson', sans-serif",
                }}
              >
                Your Email (required)
              </label>
              <input
                type="email"
                name="your-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '18px',
                  borderRadius: '6px',
                  border: '1px solid var(--md-sys-color-outline)',
                  backgroundColor: 'var(--md-sys-color-surface)',
                  color: 'var(--md-sys-color-on-surface)',
                  outline: 'none',
                }}
              />
            </div>

            {/* Subject */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  fontFamily: "'canada-type-gibson', sans-serif",
                }}
              >
                Subject
              </label>
              <input
                type="text"
                name="your-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '18px',
                  borderRadius: '6px',
                  border: '1px solid var(--md-sys-color-outline)',
                  backgroundColor: 'var(--md-sys-color-surface)',
                  color: 'var(--md-sys-color-on-surface)',
                  outline: 'none',
                }}
              />
            </div>

            {/* Your Message */}
            <div style={{ marginBottom: '24px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  fontFamily: "'canada-type-gibson', sans-serif",
                }}
              >
                Your Message
              </label>
              <textarea
                name="your-message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '18px',
                  borderRadius: '6px',
                  border: '1px solid var(--md-sys-color-outline)',
                  backgroundColor: 'var(--md-sys-color-surface)',
                  color: 'var(--md-sys-color-on-surface)',
                  outline: 'none',
                  fontFamily: 'var(--font-sans)',
                }}
              />
            </div>

            {/* Submit Button */}
            <div>
              <input
                type="submit"
                value="Send"
                style={{
                  backgroundColor: 'var(--theme-palette-color-1, #624aca)',
                  color: '#ffffff',
                  padding: '12px 36px',
                  fontSize: '18px',
                  fontWeight: 600,
                  fontFamily: "'canada-type-gibson', sans-serif",
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'opacity 0.15s ease',
                }}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
