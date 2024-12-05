import {useState} from "react";
import styles from "./Form.module.css";
import Card from "../../context/CardForm";
import Layout from "../../components/Layout";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		identification: "",
		phone: "",
		email: "",
		amiiboName: "",
		type: "",
		message: "",
	});
	
	const [errors, setErrors] = useState({});
	const [showSummary, setShowSummary] = useState(false);

	const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	
	const validateForm = () => {
		const newErrors = {};
		if (formData.name.trim().length < 3) newErrors.name = "El nombre es obligatorio y debe tener al menos 3 caracteres";
		if (formData.identification.trim().length < 5) newErrors.identification = "La identificación es obligatoria y debe tener al menos 5 caracteres";
		if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "El teléfono debe tener 10 dígitos";
		if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "El email no es válido";
		if (formData.amiiboName.trim().length < 3) newErrors.amiiboName = "El nombre del amiibo es obligatorio";
		if (!['Figura', 'Lana', 'Tarjeta'].includes(formData.type)) newErrors.type = "Seleccione un tipo válido";
		return newErrors;
	};

	const handleSubmit = (event) => {
	event.preventDefault();
	const formErrors = validateForm();
	setErrors(formErrors);

	if (Object.keys(formErrors).length === 0) {
		setShowSummary(true);
	}
	};


	const handleReload = () => {
		window.location.reload();
	};

	return (
		<Layout>
		<div className={styles.container}> 
		
		<div className={styles.contentWrapper}>
		<div className={styles.formWrapper}>
			<h2 className={styles.title}>Formulario de Contacto Amiibo</h2>
			<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.formColumns}>
				<div className={styles.formColumn}>
				<div className={styles.formGroup}>
					<label htmlFor="name">Nombre:</label>
					<input
					type="text"
					role="name"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					/>
					{errors.name && <p className={styles.error}>{errors.name}</p>}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="identification">Identificación:</label>
					<input
					type="text"
					role="identification"
					id="identification"
					name="identification"
					value={formData.identification}
					onChange={handleChange}
					/>
					{errors.identification && <p className={styles.error}>{errors.identification}</p>}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="phone">Teléfono:</label>
					<input
					type="tel"
					role="phone"
					id="phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					/>
					{errors.phone && <p className={styles.error}>{errors.phone}</p>}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="email">Email:</label>
					<input
					type="email"
					role="email"
				
					name="email"
					value={formData.email}
					onChange={handleChange}
					/>
					{errors.email && <p className={styles.error}>{errors.email}</p>}
				</div>
				</div>

				<div className={styles.formColumn}>
				<div className={styles.formGroup}>
					<label htmlFor="amiiboName">Nombre de Amiibo:</label>
					<input
					type="text"
					role="amiiboName"
					id="amiiboName"
					name="amiiboName"
					value={formData.amiiboName}
					onChange={handleChange}
					/>
					{errors.amiiboName && <p className={styles.error}>{errors.amiiboName}</p>}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="type">Tipo:</label>
					<select
					id="type"
					role="lista"
					name="type"
					value={formData.type}
					onChange={handleChange}
					>
					<option value="">Seleccione un tipo</option>
					<option value="Figura">Figura</option>
					<option value="Lana">Lana</option>
					<option value="Tarjeta">Tarjeta</option>
					</select>
					{errors.type && <p className={styles.error}>{errors.type}</p>}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="message">Observaciones o Mensaje:</label>
					<textarea
					id="message"
					role="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					></textarea>
				</div>
				</div>
			</div>

			<div className={styles.buttonGroup}>
				<button type="submit" role="submit" className={styles.submitButton}>Enviar</button>
				<button type="button" role="reload" className={styles.reloadButton} onClick={handleReload}>Nuevo</button>
			</div>
			</form>
		</div>
		
		{showSummary && (
			<div className={styles.summaryWrapper}>
			<Card data={formData} />
			</div>
		)}
		</div>
	</div>
	</Layout>
	);
};

export default Form;
