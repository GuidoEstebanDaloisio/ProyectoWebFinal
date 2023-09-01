import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductosItem from '../components/productos/ProductosItem';
import '../styles/pages/Productos.css';

const Productos = (props) => {
    const [loading, setLoading] = useState(false);
    const [producto, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            //const response = await axios.get('${process.env.REACT_APP_API_URL}/api/productos');
            const response = await axios.get('http://localhost:4000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };

        cargarProductos();
    }, []);


    return (
        <section id="productos">
            <h2>Nuestros Productos</h2>
            <div className="productos-grid">
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    producto.map(item => <ProductosItem key={item.id_producto} title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.cuerpo} />)
                )
            }
            </div>
        </section>
    )
};

export default Productos;