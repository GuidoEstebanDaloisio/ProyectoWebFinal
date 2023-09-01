import React from "react";
import { Link } from "react-router-dom";
import '../styles/pages/HomePage.css';
import '../styles/Module.css';


const HomePage = (props) => {
    return (
        <main>
          <section id="homeBanner">
            <div className="container">
              <h1 className="bannerTitulo">¡Da vida a tus ideas!</h1>
              <p className="bannerDescripcion">Explora el mundo de la tecnología con nuestros kits de robots y autómatas.</p>
              <Link to="/productos" className="banner-btn">Ver productos</Link> 

            </div>
          </section>
    
          <section id="homeNosotros">
            <div className="container">
              <h2 className="nosotrosTitulo">Nosotros</h2>
              <p className="nosotrosDescripcion">En CraftBot nos apasiona la creatividad y la tecnología. Nuestro objetivo es fomentar la innovación y el aprendizaje a través de nuestros kits de construcción de robots. Ofrecemos una amplia variedad de kits que incluyen piezas de alta calidad y detalladas instrucciones de ensamblaje. Además, brindamos la opción de personalizar tus propios robots según tus necesidades y preferencias.</p>
            </div>
          </section>
        </main>
      );
}

export default HomePage;