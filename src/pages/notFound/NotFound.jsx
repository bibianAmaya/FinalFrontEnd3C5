import styles from "./NotFound.module.css"
import {Link} from "react-router";

const NotFound = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.message}>Página no encontrada</h2>
        <p className={styles.description}>
            Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link to="/" className={styles.link}>
            Volver al inicio
        </Link>
        </div>
    )
}
export default NotFound