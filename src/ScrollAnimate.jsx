import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimate({ children }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando o elemento entra 15% na tela, ativa a animação
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Opcional: desativa o observer se quiser que a animação aconteça apenas uma vez
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-fade-in ${isIntersecting ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}