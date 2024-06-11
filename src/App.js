import logo from "./logo.svg";
import "./App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Heading from '../src/components/Common/Heading'
import Footer from "../src/components/Common/Footer";
import { ProtectedRoute, PublicRoute } from "./Auth/Protected";
import {useState, useEffect} from "react"
import ProductPage from "./Pages/ProductPage";
import Header from '../src/components/Common/Header'
function App() {
  let [isLoggedIn, setLoggedIn] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Heading />
      <Header />
      <Routes>
        {/* <Route path='/' element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage /></ProtectedRoute>} /> */}
        <Route path='/signup' element={<PublicRoute isLoggedIn={isLoggedIn}><Signup /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute isLoggedIn={isLoggedIn}><Login setLoggedIn={setLoggedIn} /></PublicRoute>} />
        {/* <Route path="/productdetail/:id" element={<ProtectedRoute isLoggedIn={isLoggedIn}><ProductPage/></ProtectedRoute>}/> */}
        <Route path="/productdetail/:id" element={<ProductPage/>}/>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
