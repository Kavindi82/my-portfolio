import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Python", "SQL", "MongoDB"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub Actions", "CI/CD", "Linux"]
  },
  {
    title: "Certificates",
    skills: ["AWS Cloud Practitioner", "Google Digital Marketing", "AI/ML - SLIIT", "Building AI - Helsinki"]
  }
];

export default function Skills() {
  return (
    <section id="skills" style={{
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
        My Skills
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px', maxWidth: '1100px', margin: '0 auto'
      }}>
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px #a855f799' }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #a855f733',
              borderRadius: '16px', padding: '28px',
              cursor: 'pointer', transition: 'all 0.3s ease'
            }}
          >
            <h3 style={{
              fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px',
              background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>
              {cat.title}
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {cat.skills.map((skill, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: j * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: '#a855f7', color: 'white' }}
                  style={{
                    backgroundColor: '#a855f722', color: '#a855f7',
                    padding: '6px 16px', borderRadius: '9999px',
                    fontSize: '0.85rem', cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}