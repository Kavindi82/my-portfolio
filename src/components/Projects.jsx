import { motion } from 'framer-motion';

const projects = [
  {
  title: "Silent Scholar (Final Year Project)",
  desc: "An Effective E-learning System for Empowering Learners with Speech and Hearing difficulties in Primary Education. Developed a responsive web application aimed at streamlining teaching, learning, and administrative tasks within a private educational institute. The system integrates features such as online lecture sharing, assignment submission, and teacher-student communication in one platform.",
  tech: ["React", "Node.js", "MongoDB", "Full Stack", "UI/UX"],
  link: "https://github.com/Kavindi82"
},
  
  {
    title: "Saving Tracker",
    desc: "A personal finance tracking web application with add, edit, delete transactions and automatic balance calculations with CI/CD pipeline.",
    tech: ["React.js", "CSS", "GitHub Actions"],
    link: "#"
  },
  {
    title: "Social Media Addiction App",
    desc: "A mobile and web-based application for monitoring and reducing social network usage with daily screen time tracking and alerts.",
    tech: ["React", "UI/UX", "Mobile"],
    link: "#"
  },
  {
    title: "Meditation Tracker",
    desc: "A simple web application for tracking meditation sessions, viewing progress, and maintaining consistency.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Deepfake Detection Research",
    desc: "Research on Deepfake Detection Literacy in Digital Content Creators and impact of digital learning platforms on student engagement.",
    tech: ["Research", "AI/ML", "Analysis"],
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{
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
        My Projects
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px', maxWidth: '1100px', margin: '0 auto'
      }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 40px #a855f755, 0 0 80px #3b82f622',
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '24px',
              padding: '36px',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
          >
            <h3 style={{
              fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '16px',
              background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>
              {p.title}
            </h3>
            <p style={{
              color: '#94a3b8', fontSize: '0.95rem',
              marginBottom: '24px', lineHeight: '1.7'
            }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {p.tech.map((t, j) => (
                <span key={j} style={{
                  background: 'rgba(168, 85, 247, 0.15)',
                  color: '#a855f7',
                  padding: '4px 14px', borderRadius: '9999px',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(168, 85, 247, 0.3)'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}