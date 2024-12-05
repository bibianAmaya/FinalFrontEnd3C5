// import {Link} from "react-router";
import styles from "./Products.module.css";
import {useCart} from "../../context/CartContext";
import Layout from "../../components/Layout";
import { Heart, ShoppingCart } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const Products  = () => {
	const {addToCart, products, favorites, handleFavorite} = useCart();
	
	const navigate = useNavigate();

	const handleClick = (id) => {
		navigate(`/product/${id}`);
	};

	return (
		<Layout>
		<main className={styles.container}>
			
			<h1 className={styles.title}>Personajes Amiibo</h1>
			<section className={styles.productGrid}>
			{products.map((product) => (
			<article key={product.tail} className={styles.productCard} >
				<div className={styles.imageContainer} onClick={() => handleClick(product.tail)}>
				<img src={product.image} alt={product.amiiboSeries} className={styles.productImage} />
				</div>
				<div className={styles.productInfo}>
				<h2 className={styles.productName}>{product.name}</h2>
				<div className={styles.actions}>
				<button 
					className={styles.favoriteButton} onClick={() => handleFavorite(product.tail)}
					aria-label={favorites[product.tail] ? "Remove from favorites" : "Add to favorites"}>
					<Heart className={favorites[product.tail] ? styles.favoriteActive : styles.favoriteNoActive} />
					</button>
					<button className={styles.addToCartButton} onClick={() => addToCart(product)}>
					<ShoppingCart/>
					</button>
				</div>
				</div>
				</article>
				))}
			</section>
		</main>
		</Layout>
	);
};

export default Products ;
