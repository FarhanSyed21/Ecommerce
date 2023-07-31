import { CartProvider } from "./components/CartContext";
import Product from "./components/Products/Product";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Navbar/Home/Home";
import About from "./components/Navbar/About/About";
import Contact from "./components/Navbar/Contact/Contact";
import ProductPage from "./components/Products/ProductPage";
import Login from "./UserAuth/Login";
import Signup from "./UserAuth/Signup";
import { UserAuthContextProvider } from "./UserAuthContext";
import ProctedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <UserAuthContextProvider>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route
                exact
                path="/home"
                element={
                  <ProctedRoute>
                    <Home />
                  </ProctedRoute>
                }
              />
              <Route
                exact
                path="/store"
                element={
                  <ProctedRoute>
                    <Product />
                  </ProctedRoute>
                }
              />
              <Route
                exact
                path="/about"
                element={
                  <ProctedRoute>
                    <About />
                  </ProctedRoute>
                }
              />
              <Route
                exact
                path="/contact"
                element={
                  <ProctedRoute>
                    <Contact />
                  </ProctedRoute>
                }
              />
              <Route
                path="/product"
                element={
                  <ProctedRoute>
                    <ProductPage />
                  </ProctedRoute>
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
