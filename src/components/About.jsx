import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', level: 75 },
  { name: 'JavaScript', level: 70 },
  { name: 'Python', level: 65 },
  { name: 'Node.js', level: 60 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'SQL', level: 65 },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 80px', color: 'white' }}>
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

      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', maxWidth: '1100px', margin: '0 auto', flexWrap: 'wrap' }}>

        {/* Left - Photo + Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
        >
          <div style={{
            width: '220px', height: '220px', borderRadius: '50%',
            overflow: 'hidden', border: '4px solid #a855f7',
            boxShadow: '0 0 40px #a855f755'
          }}>
            <img src="/profile.jpeg" alt="Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Download CV Button */}
          <a href="/cv.pdf" download style={{
            background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
            color: 'white', padding: '12px 28px',
            borderRadius: '9999px', textDecoration: 'none',
            fontWeight: 'bold', fontSize: '0.95rem',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            📄 Download CV
          </a>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="mailto:kavindimadushikasandaruwani@gmail.com" style={{
              background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
              color: 'white', padding: '10px 20px', borderRadius: '8px',
              textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold'
            }}>📧 Email</a>
            <a href="https://linkedin.com/in/kavindi-sandaruwani" target="_blank" rel="noreferrer" style={{
              border: '1px solid #a855f7', color: '#a855f7',
              padding: '10px 20px', borderRadius: '8px',
              textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold'
            }}>💼 LinkedIn</a>
          </div>
        </motion.div>

        {/* Right - Info + Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1, minWidth: '300px' }}
        >
          <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '8px' }}>
            Kavindi Sandaruwani
          </h3>
          <p style={{ color: '#a855f7', marginBottom: '16px', fontSize: '1rem' }}>
            BIT(Hons) in Networking and Mobile Computing — Horizon Campus
          </p>
          <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '32px', fontSize: '0.95rem' }}>
            Dedicated and self-motivated Network and Mobile Computing student with a great passion
            for programming and problem solving. Willing to learn new skills with an interest to
            gain more experiences to be an outstanding individual.
          </p>

          {/* Skill Progress Bars */}
          <h4 style={{ color: '#a855f7', marginBottom: '20px', fontSize: '1.1rem' }}>⚡ Skills</h4>
          {skills.map((skill, i) => (
            <div key={i} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: 'white', fontSize: '0.9rem' }}>{skill.name}</span>
                <span style={{ color: '#a855f7', fontSize: '0.9rem' }}>{skill.level}%</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', height: '8px' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  style={{
                    height: '100%', borderRadius: '9999px',
                    background: 'linear-gradient(90deg, #a855f7, #3b82f6)'
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}