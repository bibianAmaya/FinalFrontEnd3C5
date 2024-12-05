import Navbar from "./Navbar";
import styles from './Layout.module.css';

function Layout({children}) {
	return (
		<div className={styles.globalLayout}>
			<Navbar />
			{children}
		</div>
	);
}
export default Layout;
