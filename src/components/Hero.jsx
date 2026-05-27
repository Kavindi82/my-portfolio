import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 80px;
          background: linear-gradient(135deg, #0a0a0a 0%, #0d0221 50%, #0a0a2e 100%);
          color: white;
          position: relative;
          overflow: hidden;
          gap: 40px;
        }

        .hero-photo {
          width: 380px;
          height: 380px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #a855f7;
          box-shadow: 0 0 40px #a855f755, 0 0 80px #3b82f633;
          flex-shrink: 0;
        }

        .hero-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .hero-btn {
          background: linear-gradient(90deg, #a855f7, #3b82f6);
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          display: inline-block;
        }

        @media (max-width: 900px) {
          .hero-section {
            padding: 0 40px;
            gap: 30px;
          }
          .hero-photo {
            width: 260px;
            height: 260px;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            flex-direction: column-reverse;
            justify-content: center;
            padding: 100px 24px 60px;
            text-align: center;
            gap: 28px;
          }
          .hero-photo {
            width: 180px;
            height: 180px;
          }
          .hero-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <section className="hero-section">
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
            style={{ fontSize: '2.8rem', fontWeight: 'bold', lineHeight: 1.2, marginBottom: '20px' }}
          >
            Full Stack Developer<br />
            <span style={{
              background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Cloud & IT Solutions
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
            className="hero-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Let's Connect
          </motion.a>
        </div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img src="/profile.jpeg" alt="Profile" />
        </motion.div>
      </section>
    </>
  );
}