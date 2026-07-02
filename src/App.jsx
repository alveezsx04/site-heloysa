import { useState } from 'react'
import './App.scss'
import ScrollAnimate from './ScrollAnimate';

import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import foto3 from './assets/foto3.jpg'
import foto4 from './assets/foto4.jpg'

const CAPITULOS = [
  {
    id: 1,
    titulo: "23 de março",
    subtitulo: "O começo",
    texto: "Nós estavamos nos conhecendo ainda, e por conhecidência a gente foi trabalhar com a roupa combinando.",
    imagem: foto1
  },
  {
    id: 2,
    titulo: "20 de abril",
    subtitulo: "1 mês com você",
    texto: "Estar junto com você já fazia parte da minha rotina, eu estava completamente apaixonado.",
    imagem: foto2
  },
  {
    id: 3,
    titulo: "21 de Maio",
    subtitulo: "Os olhos mais lindos do mundo",
    texto: "Nesse dia você estava tão linda, como todos os dias. Sou apaixonado em cada detalhe que você tem. Nem uma das milhares estrelas que existem no universo se comparam a beleza do seu olhar.",
    imagem: foto3
  },
    {
    id: 4,
    titulo: "29 de Junho",
    subtitulo: "Jogo do Brasil",
    texto: "Foi tão bom passar esse dia com você. Espero que tenhamos mais dias como esse.",
    imagem: foto4
  }
  
]

function App() {

  const tocarMusica = () => {
    window.open("https://open.spotify.com/intl-pt/track/1mSxbLW7fKABfeY4lGpg0E?si=e3edb05d242d499b", "_blank");
    
  }

  return (
    <div className="site-container">
      
      <section className="hero-section">
        <div className="hero-content">
          <span>PARA VOCÊ</span>
          <h1>Heloysa</h1>
          <p>"Você é assim, um sonho pra mim."</p>

        </div>
      </section>

      <section className="chapters-section">
        {CAPITULOS.map((capitulo) => (
          <div key={capitulo.id} className="chapter-card">
            <ScrollAnimate>
            <div className="image-container">
              <img src={capitulo.imagem} alt={capitulo.subtitulo} />
            </div>
            </ScrollAnimate>
            <ScrollAnimate>
            <div className="text-container">
              <span>{capitulo.titulo}</span>
              <h2>{capitulo.subtitulo}</h2>
              <p>{capitulo.texto}</p>
              <span className="heart-icon">♥</span>
            </div>
            </ScrollAnimate>
          </div>
        ))}
      </section>

<section className="footer-section">
  <span>E PRA TERMINAR</span>
  <h2>Uma música que me faz lembrar de você</h2>
  <p>Toda vez que eu ouço, eu lembro dos nossos momentos juntos</p>
  
  <div className="spotify-container">
    <iframe 
      data-testid="embed-iframe" 
      style={{ borderRadius: '12px' }} 
      src="https://open.spotify.com/embed/track/1mSxbLW7fKABfeY4lGpg0E?utm_source=generator&theme=0&si=c36f9db46bb44868" 
      width="100%" 
      height="352" 
      frameBorder="0" 
      allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"
    ></iframe>
  </div>
  
  <p className="signature">Você é muito especial pra mim, nunca se esqueça disso. Eu te amo princesa ♥</p>
</section>

    </div>
  )
}

export default App