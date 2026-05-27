import { motion } from 'framer-motion';

const certificates = [
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services', image: '/aws.png' },
  { name: 'Fundamentals of Digital Marketing', issuer: 'Google Digital Garage', image: '/google.jpeg' },
  { name: 'AI/ML Engineer Stage 1', issuer: 'SLIIT', image: '/aiml.png' },
];

export default function Certificates() {
  return (
    <section id="certificates" style={{
      padding: '100px 80px',
      color: 'white',
      textAlign: 'center'
    }}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '60px',
          background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}
      >
        Certificates
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px', maxWidth: '1100px', margin: '0 auto'
      }}>
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px #a855f755' }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168,85,247,0.2)',
              borderRadius: '16px', overflow: 'hidden',
              cursor: 'pointer', transition: 'all 0.3s ease',
            }}
          >
            <img
              src={cert.image}
              alt={cert.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{
                fontSize: '1rem', fontWeight: 'bold', marginBottom: '8px',
                background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>
                {cert.name}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}