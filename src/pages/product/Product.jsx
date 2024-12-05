import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from "../../context/CartContext";
import Layout from "../../components/Layout";
import { Heart } from 'lucide-react';
import styles from './Product.module.css';

const Product = () => {
const { id } = useParams();
const navigate = useNavigate();
const { addToCart, products, favorites, handleFavorite } = useCart();
const [product, setProduct] = useState(null);

useEffect(() => {
    const foundProduct = products.find(p => p.tail === id);
    if (foundProduct) {
        setProduct(foundProduct);
    } else {
        navigate('/products');
    }
}, [id, products, navigate]);

if (!product) {
return <div>Loading...</div>;
}

const formatDate = (dateString) => {
    return dateString ? new Date(dateString).toLocaleDateString() : 'No disponible';
};

return (
    <Layout>
    <main className={styles.container}>
    
    
    <div className={styles.productDetails}>
    <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
    </div>
    <div className={styles.info}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p><strong>Serie Amiibo:</strong> {product.amiiboSeries}</p>
        <p><strong>Personaje:</strong> {product.character}</p>
        <p><strong>Serie de Juego:</strong> {product.gameSeries}</p>
        <p><strong>Tipo:</strong> {product.type}</p>
        <h2 className={styles.releaseDates}>Fechas de Lanzamiento:</h2>
        <ul>
        <li><strong>América del Norte:</strong> {formatDate(product.release.na)}</li>
        <li><strong>Japón:</strong> {formatDate(product.release.jp)}</li>
        <li><strong>Europa:</strong> {formatDate(product.release.eu)}</li>
        <li><strong>Australia:</strong> {formatDate(product.release.au)}</li>
        </ul>
        <div className={styles.actions}>
        <button className={styles.favoriteButton} onClick={() => handleFavorite(product.tail)}
            aria-label={favorites[product.tail] ? "Remove from favorites" : "Add to favorites"}>
            <Heart className={favorites[product.tail] ? styles.favoriteActive : styles.favoriteNoActive} />
            {favorites[product.tail] ? 'Quitar de favoritos' : 'Añadir a favoritos'}
        </button>
        <button className={styles.addToCartButton} onClick={() => addToCart(product)}>
            Agregar al carrito
        </button>
        </div>
    </div>
    </div>
    </main>
    </Layout>
);
};

export default Product;

