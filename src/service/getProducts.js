export const getProducts = async () => {
	try {
		const endPoint = "https://www.amiiboapi.com/api/amiibo";
		const response = await fetch(endPoint);
		const data = await response.json();
		return data.amiibo;
	} catch (error) {
		console.log("Error al obtener los productos", error);
	}
};
