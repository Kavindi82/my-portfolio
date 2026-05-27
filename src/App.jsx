import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <div style={{ minHeight: '100vh' }}><About /></div>
        <div style={{ minHeight: '100vh' }}><Projects /></div>
        <div style={{ minHeight: '100vh' }}><Skills /></div>
        <div style={{ minHeight: '100vh' }}><Certificates /></div>
        <div style={{ minHeight: '100vh' }}><Contact /></div>
      </div>
    </div>
  );
}

export default App;