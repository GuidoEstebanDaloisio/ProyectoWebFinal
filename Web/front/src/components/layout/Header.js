import React from "react";
import '../../styles/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="rectanguloParaLogo"></div>
            <div className="circuloParaLogoNegro">
                <p><span>Craft</span></p>
            </div>
            <div className="circuloParaLogoBlanco">
                <img src="/images/Logo.jpg" alt="logo" />
            </div>
            <div className="circuloParaLogoNegro">
                <p><span>Bot</span></p>
            </div>
        </header>
    )
}

export default Header;