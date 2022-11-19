import '../../App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Home from '../Home/Home.jsx';
import About from './../About/About.jsx';
import Product from '../Product/Product.jsx';
import Contact from '../Contact/Contact.jsx';
import Cart from '../Cart/Cart.jsx';
import ProductSpecifics from '../ProductSpecifics/ProductSpecifics.jsx';
import Footer from '../Footer/Footer.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductSpecifics />} />
        <Route path="/redirect" element={ <Navigate to="/" /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
