import React from "react";
import '../styles/pages/Historia.css';
import '../styles/Module.css';


const Historia = (props) => {
    return (
        <main>
          <section id="historia">
            <div className="container">
              <h2>Nuestra Historia</h2>
              <p>En CraftBot, creemos en el poder de la creatividad y la tecnología para impulsar la innovación.
                Fundada en 2015, nuestra empresa se dedica a proporcionar kits de robots y autómatas que fomentan la
                exploración y el aprendizaje en el campo de la robótica. Nuestro objetivo es acercar la tecnología a
                personas de todas las edades y niveles de experiencia, brindando las herramientas y los recursos
                necesarios para construir sus propios robots personalizados.</p>
            </div>
          </section>
    
          <section id="fundadores">
            <h2>Nuestros Fundadores</h2>
            <div className="fundadores-grid">
              <div className="fundador">
                <img src="/images/fundador1.jpg" alt="Fundador 1" />
                <h3>John Doe</h3>
                <p>Diseñador Jefe</p>
              </div>
              <div className="fundador">
                <img src="/images/fundador2.jpg" alt="Fundador 2" />
                <h3>Jane Smith</h3>
                <p>Especialista en Programación</p>
              </div>
              <div className="fundador">
                <img src="/images/fundador3.jpg" alt="Fundador 3" />
                <h3>Michael Johnson</h3>
                <p>Experto en Prototipado</p>
              </div>
              <div className="fundador">
                <img src="/images/fundador4.jpg" alt="Fundador 4" />
                <h3>Sarah Davis</h3>
                <p>Gerente de Calidad</p>
              </div>
              <div className="fundador">
                <img src="/images/fundador5.jpg" alt="Fundador 5" />
                <h3>Robert Anderson</h3>
                <p>Especialista en Electrónica</p>
              </div>
            </div>
          </section>
        </main>
      );
}

export default Historia;