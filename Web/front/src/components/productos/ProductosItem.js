import React from "react";
import '../../styles/pages/Productos.css';
import defaultImage from './Images/defaultRobot.jpg'; // Reemplaza con la ruta correcta





const ProductosItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    // Verificar si hay una imagen, si no, usar la imagen por defecto
    const imagenSrc = imagen ? imagen : defaultImage;

    return (
        <div className='producto'>
            <img src={imagenSrc} />
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <a href="#" className="btn-comprar">Comprar</a>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>

        
    );
}

export default ProductosItem;