import Layout from "../../components/Layout";
import styles from "./Home.module.css"
import {useState} from "react";
import amiiboImage from './images/amiibo.png';

const Home = () => {

	const [openItem, setOpenItem] = useState(null)

	const infoCards = [
		{ title: "Figuras Coleccionables", content: "Los amiibo son figuras de alta calidad de tus personajes favoritos de Nintendo." },
		{ title: "Tarjetas Interactivas", content: "También existen en formato de tarjetas, ofreciendo la misma funcionalidad en un formato más compacto." },
		{ title: "Tecnología NFC", content: "Utilizan tecnología NFC para interactuar con juegos y consolas compatibles de Nintendo." },
		{ title: "Múltiples Usos", content: "Desbloquean contenido especial, personajes y funciones en diversos juegos de Nintendo." }
	]
	const examples = [
		{ title: "Super Smash Bros.", content: "Entrena y personaliza luchadores AI para que combatan a tu lado o contra ti." },
		{ title: "The Legend of Zelda", content: "Desbloquea trajes especiales y armas únicas para Link en varias entregas de la saga." },
		{ title: "Animal Crossing", content: "Invita a residentes especiales a tu isla y obtén objetos temáticos exclusivos." }
	]


	const faqItems = [
		{
		question: "¿Cómo funcionan los amiibo?",
		answer: "Los amiibo utilizan tecnología NFC (Near Field Communication) para interactuar con consolas y juegos compatibles de Nintendo. Simplemente acerca tu amiibo al punto NFC de tu consola para activar sus funciones especiales."
		},
		{
		question: "¿Qué consolas son compatibles con amiibo?",
		answer: "Los amiibo son compatibles con Nintendo Switch, Nintendo 3DS (requiere un lector NFC adicional en modelos antiguos) y Wii U."
		},
		{
		question: "¿Puedo usar un amiibo en múltiples juegos?",
		answer: "Sí, muchos amiibo son compatibles con varios juegos diferentes, ofreciendo funcionalidades únicas en cada uno."
		},
		{
		question: "¿Los amiibo se agotan con el uso?",
		answer: "No, los amiibo no se agotan ni pierden su funcionalidad con el uso. Puedes utilizarlos tantas veces como quieras."
		}
	]

	const handleItem = (index) => {
		setOpenItem(openItem === index ? null : index)
	}

	return (
		<Layout>
		<div className={styles.container}>
		
		<main>
		
		<section className={styles.welcome}>
		<h1>Bienvenido al Mundo de los Amiibo</h1>
		<p>Descubre el poder de tus figuras y tarjetas coleccionables de Nintendo</p>
		<img src={amiiboImage} alt="Amiibo Showcase" className={styles.image} />
		</section>

		<section className={styles.information}>
		<h2>¿Qué son los Amiibo?</h2>
		<div className={styles.cardGrid}>
		{infoCards.map((card, index) => (
			<div key={index} className={styles.card}>
			<h3>{card.title}</h3>
			<p>{card.content}</p>
			</div>
		))}
		</div>
		</section>

		<section className={styles.usageExamples}>
		<h2>Ejemplos de Uso</h2>
		<div className={styles.exampleGrid}>
		{examples.map((example, index) => (
			<div key={index} className={styles.exampleCard}>
			<h3>{example.title}</h3>
			<p>{example.content}</p>
			</div>
		))}
		</div>
		</section>

		<section className={styles.faq}>
		<h2>Preguntas Frecuentes</h2>
		{faqItems.map((item, index) => (
		<div key={index} className={styles.faqItem}>
			<button className={styles.faqQuestion} onClick={() => handleItem(index)}>
			{item.question}
			</button>
			{openItem === index && (
			<div className={styles.faqAnswer}>
				{item.answer}
			</div>
			)}
		</div>
		))}
		</section>
		
		</main>
		
		</div>
		</Layout>
	);
};
export default Home;
