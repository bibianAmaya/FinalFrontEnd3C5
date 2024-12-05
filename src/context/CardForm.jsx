import styles from "../pages/form/Form.module.css";

const Card = ({ data }) => {
	return (
		<div >
			{data ? (
				<>
					
					<section className={styles.summary}>
					<h3>Resumen de la información:</h3>
					<p><strong>Nombre:</strong> {data.name}</p>
					<p><strong>Identificación:</strong> {data.identification}</p>
					<p><strong>Teléfono:</strong> {data.phone}</p>
					<p><strong>Email:</strong> {data.email}</p>
					<p><strong>Nombre de Amiibo:</strong> {data.amiiboName}</p>
					<p><strong>Tipo:</strong> {data.type}</p>
					<p><strong>Mensaje:</strong> {data.message}</p>
					</section>
				</>
			) : (
				<h2>Esto es un componente</h2>
			)}
		</div>
	);
};

export default Card;
