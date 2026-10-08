import React, { useState } from 'react';
import { siteMeta } from '../data/siteMeta';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="container-narrow" style={{ paddingBottom: '80px', paddingTop: '16px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '8px' }}>💌 Contact</h1>
        <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '15px' }}>
          It would be great to hear from you! Suggestions, questions, or guest recommendations are always welcome.
        </p>
      </div>

      <div
        className="card"
        style={{
          padding: '32px',
          backgroundColor: 'var(--md-sys-color-surface-container-low)',
          marginBottom: '32px',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '15px', marginBottom: '8px' }}>
            Email us directly at{' '}
            <a href={`mailto:${siteMeta.contactEmail}`} style={{ fontWeight: 600 }}>
              {siteMeta.contactEmail}
            </a>
            , or send a message using the form below:
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              padding: '24px',
              borderRadius: '16px',
              backgroundColor: 'var(--md-sys-color-secondary-container)',
              color: 'var(--md-sys-color-on-secondary-container)',
              textAlign: 'center',
            }}
          >
            <span className="material-symbols-rounded filled" style={{ fontSize: '40px', marginBottom: '8px' }}>
              check_circle
            </span>
            <h3 style={{ marginBottom: '8px' }}>Message received</h3>
            <p style={{ fontSize: '14px', marginBottom: '16px' }}>
              Thank you for reaching out! We&rsquo;ll get back to you as soon as possible at {email}.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}
              >
                Your name
              </label>
              <div className="input-wrapper">
                <input
                  id="contact-name"
                  type="text"
                  className="input-outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maya Lin"
                />
                {name && (
                  <button
                    type="button"
                    className="input-clear-btn"
                    onClick={() => setName('')}
                    aria-label="Clear name"
                    title="Clear"
                  >
                    <span className="material-symbols-rounded" style={{ fontSize: '18px' }}>
                      close
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}
              >
                Your email *
              </label>
              <div className="input-wrapper">
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="input-outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. name@example.com"
                />
                {email && (
                  <button
                    type="button"
                    className="input-clear-btn"
                    onClick={() => setEmail('')}
                    aria-label="Clear email"
                    title="Clear"
                  >
                    <span className="material-symbols-rounded" style={{ fontSize: '18px' }}>
                      close
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}
              >
                Subject
              </label>
              <div className="input-wrapper">
                <input
                  id="contact-subject"
                  type="text"
                  className="input-outlined"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Feedback on retreat episode"
                />
                {subject && (
                  <button
                    type="button"
                    className="input-clear-btn"
                    onClick={() => setSubject('')}
                    aria-label="Clear subject"
                    title="Clear"
                  >
                    <span className="material-symbols-rounded" style={{ fontSize: '18px' }}>
                      close
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}
              >
                Your message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                className="input-outlined"
                style={{ resize: 'vertical' }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind?"
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button type="submit" className="btn btn-primary" style={{ padding: '10px 28px' }}>
                <span className="material-symbols-rounded" style={{ fontSize: '18px' }}>
                  send
                </span>
                <span>Send message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
