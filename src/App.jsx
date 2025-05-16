import { useState, useRef, useEffect } from 'react';
import CardSection from './components/CardSection';
import menu from './data/menu.json';
import './App.css';

const sectionTitles = {
  entradas: 'Entradas',
  principais: 'Pratos Principais',
  sobremesas: 'Sobremesas',
  bebidas: 'Bebidas', 
  brindes: 'Brindes',
};

const sectionOrder = ['entradas', 'principais', 'sobremesas', 'bebidas', 'brindes'];

function App() {
  const [activeSection, setActiveSection] = useState('entradas');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef(null);

  // Scroll para o topo ao trocar de aba
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // Mostrar botão de voltar ao topo
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#f8f5f0] bg-paper flex flex-col items-center relative">
      {/* NAVBAR FIXA */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-[#f8f5f0]/95 to-[#f8f5f0]/80 border-b border-[#e5dcc7] shadow-sm backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 md:py-3">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1E3F] tracking-wider uppercase select-none" style={{ letterSpacing: '0.08em' }}>
          Trattoria Vittorio
          </h1>

          {/* SLOGAN E TRADUÇÃO */}
          <div className="w-full flex flex-col items-center py-4 px-4">
            <div className="max-w-2xl text-center">
              <p className="font-serif text-2xl md:text-3xl text-[#8B1E3F] font-bold mb-0">
                Una serata per Raissa, con tutto il cuore
              </p>
              <p className="font-sans text-base md:text-lg text-[#8B1E3F] mt-1">
                <em>Uma noite para Raissa, com todo o coração.</em>
              </p>
            </div>
          </div>

          {/* BOTÕES DE SEÇÃO */}
          <div className="flex gap-1 md:gap-4 mt-2 md:mt-0">
            {sectionOrder.map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`btn-nav px-4 py-2 md:px-6 md:py-3 text-lg${activeSection === key ? ' active' : ''}`}
                tabIndex={0}
                aria-current={activeSection === key ? 'page' : undefined}
              >
                {sectionTitles[key]}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <main
        ref={mainRef}
        className="w-full flex-1 flex flex-col items-center pt-32 pb-24 px-2 md:px-0 transition-all duration-300"
        style={{ minHeight: '70vh' }}
      >
        <div className="w-full max-w-4xl bg-white/95 rounded-2xl shadow-2xl border border-[#e5dcc7] p-4 md:p-12 animate-fadein relative overflow-hidden">
          {/* Ornamento decorativo topo */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 md:-top-10">
            <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 30C20 2 60 2 78 30" stroke="#bfa76a" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          <CardSection title={sectionTitles[activeSection]} items={menu[activeSection]} />

          {/* Ornamento decorativo base */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 md:-bottom-10 rotate-180">
            <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 30C20 2 60 2 78 30" stroke="#bfa76a" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </main>

      {/* BOTÃO VOLTAR AO TOPO */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 bg-[#bfa76a] text-white p-3 rounded-full shadow-lg hover:bg-[#7c4a1e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bfa76a]"
          aria-label="Voltar ao topo"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      )}

      {/* FOOTER FIXO */}
      <footer className="fixed bottom-0 left-0 w-full z-20 bg-gradient-to-t from-[#f8f5f0]/95 to-transparent text-center py-2 text-xs text-[#b6a089] font-serif pointer-events-none select-none">
        Serata Italiana &copy; {new Date().getFullYear()} — Design by AI
      </footer>
    </div>
  );
}

export default App;
