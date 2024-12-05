import {useCart} from "../../context/CartContext";
import styles from "./Cart.module.css";
import Layout from "../../components/Layout";
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart = () => {
	const {cart, deleteToCart, updateQuantity} = useCart();
	const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

	return (
		<Layout>
		<div className={styles.cartContainer}>
			
			<div className={styles.cartContent}>
			<h1 className={styles.title}>Carrito de Compras</h1>
			<div className={styles.cartSummary}>
				<p>Total de productos: {totalItems}</p>
			</div>
			
			{cart.length === 0 ? (
				<p className={styles.emptyMessage}>No hay productos en el carrito</p>
			) : (
				<div className={styles.cartGrid}>
				{cart.map((product) => (
					<article key={product.tail} className={styles.cartItem}>
					<div className={styles.productImage}>
						<img src={product.image} alt={product.amiiboSeries} />
					</div>
					<div className={styles.productInfo}>
						<h2>{product.name}</h2>
						<p className={styles.series}>{product.amiiboSeries}</p>
					</div>
					<div className={styles.quantityControls}>
						<button 
						onClick={() => updateQuantity(product.tail, (product.quantity || 1) - 1)}
						className={styles.quantityButton}
						disabled={product.quantity <= 1}
						>
						<Minus size={16} />
						</button>
						<span className={styles.quantity}>{product.quantity || 1}</span>
						<button 
						onClick={() => updateQuantity(product.tail, (product.quantity || 1) + 1)}
						className={styles.quantityButton}
						>
						<Plus size={16} />
						</button>
					</div>
					<button
						className={styles.deleteButton}
						onClick={() => deleteToCart(product.tail)}
					>
						<Trash2 size={20} />
					</button>
					</article>
				))}
				</div>
			)}
			</div>
		</div>
		</Layout>
	);
};

export default Cart;
