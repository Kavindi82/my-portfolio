import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm(
      'service_4sc19is',
      'template_39mubxh',
      formRef.current,
      'jzhsU6gGj_sSvsx8L'
    ).then(() => {
      setSent(true);
      setSending(false);
      formRef.current.reset();
    }).catch((err) => {
      console.log(err);
      setSending(false);
      alert('Something went wrong. Try again!');
    });
  };

  return (
    <section id="contact" style={{ padding: '100px 80px', color: 'white', textAlign: 'center' }}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px',
          background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ color: '#94a3b8', marginBottom: '48px' }}
      >
        I am open to any new opportunities. Feel free to reach out!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '600px', margin: '0 auto',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(168,85,247,0.2)',
          borderRadius: '24px', padding: '48px',
        }}
      >
        {sent ? (
          <div style={{ color: '#a855f7', fontSize: '1.3rem' }}>
            ✅ Message sent successfully!
          </div>
        ) : (
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              style={{
                width: '100%', padding: '14px 18px',
                marginBottom: '16px', borderRadius: '10px',
                border: '1px solid rgba(168,85,247,0.3)',
                background: 'rgba(255,255,255,0.05)',
                color: 'white', fontSize: '1rem', outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              style={{
                width: '100%', padding: '14px 18px',
                marginBottom: '16px', borderRadius: '10px',
                border: '1px solid rgba(168,85,247,0.3)',
                background: 'rgba(255,255,255,0.05)',
                color: 'white', fontSize: '1rem', outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              style={{
                width: '100%', padding: '14px 18px',
                marginBottom: '24px', borderRadius: '10px',
                border: '1px solid rgba(168,85,247,0.3)',
                background: 'rgba(255,255,255,0.05)',
                color: 'white', fontSize: '1rem', outline: 'none',
                resize: 'none', boxSizing: 'border-box'
              }}
            />
            <button
              type="submit"
              disabled={sending}
              style={{
                width: '100%', padding: '14px',
                background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
                color: 'white', border: 'none',
                borderRadius: '10px', fontSize: '1rem',
                fontWeight: 'bold', cursor: 'pointer'
              }}
            >
              {sending ? 'Sending...' : '✉️ Send Message'}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}