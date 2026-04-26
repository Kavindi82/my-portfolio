import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 80px',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #0d0221 50%, #0a0a2e 100%)',
      color: 'white',
    }}>
      {/* Left Side */}
      <div style={{ maxWidth: '550px' }}>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: '#a855f7', fontSize: '1.1rem', marginBottom: '12px' }}
        >
          Welcome to my Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: 1.2, marginBottom: '20px' }}
        >
          Frontend <br />
          <span style={{
            background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '12px' }}
        >
          Dedicated to creating impactful digital solutions through clean code and creative design.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '32px' }}
        >
          Specializing in modern web development and cyber systems
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            display: 'inline-block',
          }}
        >
          Let's Connect
        </motion.a>
      </div>

      {/* Right Side - Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid #a855f7',
          boxShadow: '0 0 40px #a855f755, 0 0 80px #3b82f633',
        }}
      >
        <img
          src="/profile.jpeg"
          alt="Profile"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>
    </section>
  );
}