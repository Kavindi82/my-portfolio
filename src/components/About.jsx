import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" style={{
      padding: '100px 80px',
      color: 'white',
    }}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '60px', textAlign: 'center',
          background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}
      >
        About Me
      </motion.h2>

      <div style={{ display: 'flex', gap: '60px', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            minWidth: '250px', height: '250px', borderRadius: '50%',
            overflow: 'hidden', border: '4px solid #a855f7',
            boxShadow: '0 0 40px #a855f755'
          }}
        >
          <img src="/profile.jpeg" alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
            Kavindi Sandaruwani
          </h3>
          <p style={{ color: '#a855f7', marginBottom: '16px', fontSize: '1rem' }}>
            BIT(Hons) in Networking and Mobile Computing — Horizon Campus
          </p>
          <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '24px', fontSize: '0.95rem' }}>
            Dedicated and self-motivated Network and Mobile Computing student with a great passion 
            for programming and problem solving. Willing to learn new skills with an interest to 
            gain more experiences to be an outstanding individual.
          </p>

          {/* Education */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: '#a855f7', marginBottom: '12px', fontSize: '1rem' }}>🎓 Education</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '6px' }}>
              • BIT(Hons) Networking & Mobile Computing — Horizon Campus (2022–Present)
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '6px' }}>
              • G.C.E Advanced Level — G/Sangamiththa Girls College (2021)
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              • G.C.E Ordinary Level — G/Sangamiththa Girls College (2017)
            </p>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="mailto:kavindimadushikasandaruwani@gmail.com" style={{
              background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
              color: 'white', padding: '10px 24px', borderRadius: '8px',
              textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold'
            }}>
              📧 Email Me
            </a>
            <a href="https://linkedin.com/in/Kavindi Sandaruwani" target="_blank" rel="noreferrer" style={{
              border: '1px solid #a855f7', color: '#a855f7',
              padding: '10px 24px', borderRadius: '8px',
              textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold'
            }}>
              💼 LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}