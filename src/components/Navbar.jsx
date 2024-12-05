import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import styles from './Navbar.module.css';
import { useCart } from '../context/CartContext';

const Navbar = () => {
const { cart, favorites } = useCart();

const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
const totalFavorites = Object.values(favorites).filter(Boolean).length;

return (
<nav className={styles.navbar}>
	<ul className={styles.navList}>
	<li className={styles.navItem}>
		<Link to="/" className={styles.navLink}>Inicio</Link>
	</li>
	<li className={styles.navItem}>
		<Link to="/products" className={styles.navLink}>Productos</Link>
	</li>
	<li className={styles.navItem}>
		<Link to="/form" className={styles.navLink}>Contacto</Link>
	</li>
	<li className={`${styles.navItem} ${styles.iconContainer}`}>
	<Link  className={`${styles.navLink} ${styles.iconLink}`}>
		<Heart size={24} />
		{totalFavorites > 0 && <span className={styles.badge}>{totalFavorites}</span>}
		</Link>
		<Link to="/cart" className={`${styles.navLink} ${styles.iconLink}`}>
		<ShoppingCart size={24} />
		{totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
		</Link>
	</li>
	</ul>
</nav>
);
};

export default Navbar;

