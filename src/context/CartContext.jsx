/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext, useEffect, useState} from "react";
import {getProducts} from "../service/getProducts";

const CartContext = createContext();

export const CartProvider = ({children}) => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem('cart');
		return savedCart ? JSON.parse(savedCart) : [];
	});
	const [favorites, setFavorites] = useState(() => {
	const savedFavorites = sessionStorage.getItem('favorites');
	return savedFavorites ? JSON.parse(savedFavorites) : {};
	});

	const addToCart = (product) => {
		setCart((prevCart) => {
		const existingProduct = prevCart.find(item => item.tail === product.tail);
		if (existingProduct) {
		return prevCart.map(item => 
			item.tail === product.tail 
			? { ...item, quantity: (item.quantity || 1) + 1 }
			: item
		);
		}
		return [...prevCart, { ...product, quantity: 1 }];
	});
	};

	const deleteToCart = (tail) => {
		setCart((prevState) => prevState.filter((product) => product.tail !== tail));
	};

	const updateQuantity = (tail, quantity) => {
		if (quantity < 1) return;
		setCart(prevCart => 
		prevCart.map(item => 
		item.tail === tail ? { ...item, quantity } : item
		)
	);
	};
	
	const handleFavorite = (productId) => {
		setFavorites(prev => {
		const newFavorites = {
		...prev,
		[productId]: !prev[productId]
		};
		return newFavorites;
	});
	};

 	//  cart to localStorage
	useEffect(() => {
	localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	//  favorites to sessionStorage
	useEffect(() => {
	sessionStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	useEffect(() => {
		getProducts().then((data) => {
			setProducts(data);
		});
	}, []);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteToCart,
				updateQuantity,
				products,
				favorites,
				handleFavorite,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
