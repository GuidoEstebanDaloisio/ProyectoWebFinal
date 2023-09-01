import React from "react";
import '../styles/pages/NiveLab.css';
import '../styles/Module.css';


const NiveLab = (props) => {
    return (
        <main>
          <section id="niveLab">
            <h2>NiveLab</h2>
            <p className="descripcion">En NiveLab, ofrecemos una amplia gama de kits para armar robots y autómatas, diseñados para diferentes niveles de habilidad y experiencia. Ya seas un principiante curioso o un experto en tecnología, tenemos el kit perfecto para ti. Explora nuestras opciones a continuación y comienza a construir tu próxima creación tecnológica.</p>
            <div className="combos-grid">
              <div className="combo">
                <img src="/images/combo1.jpg" alt="Combo 1" />
                <h3>Combo Inicial</h3>
                <p>Perfecto para principiantes que desean adentrarse en el mundo de la robótica. Incluye un kit básico de componentes y un instructivo detallado.</p>
                <a href="#" className="btn-comprar">Comprar</a>
              </div>
              <div className="combo">
                <img src="/images/combo2.jpg" alt="Combo 2" />
                <h3>Combo Principiante</h3>
                <p>Ideal para aquellos con conocimientos básicos de electrónica y programación. Contiene componentes avanzados y proyectos desafiantes.</p>
                <a href="#" className="btn-comprar">Comprar</a>
              </div>
              <div className="combo">
                <img src="/images/combo3.jpg" alt="Combo 3" />
                <h3>Combo Intermedio</h3>
                <p>Para entusiastas con experiencia en robótica. Ofrece proyectos complejos y la posibilidad de personalización avanzada.</p>
                <a href="#" className="btn-comprar">Comprar</a>
              </div>
              <div className="combo">
                <img src="/images/combo4.jpg" alt="Combo 4" />
                <h3>Combo Avanzado</h3>
                <p>Dirigido a expertos en robótica y programación. Incluye componentes de vanguardia y desafiantes proyectos de ingeniería.</p>
                <a href="#" className="btn-comprar">Comprar</a>
              </div>
            </div>
          </section>
        </main>
      );
}

export default NiveLab;