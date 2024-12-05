import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router";
import {CartProvider} from "./context/CartContext";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Form from "./pages/form/Form";
import NotFound from "./pages/notFound/NotFound";

function App() {
	return (
		<CartProvider>
			
			
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Products" element={<Products />} />
					<Route path="/product/:id" element={<Product />}></Route>
					<Route path="/cart" element={<Cart />} />
					<Route path="/Form" element={<Form />} />
					<Route path="*" element={<NotFound />} />
				</Routes>	
			</BrowserRouter>
			
		</CartProvider>
	);
}

export default App;
