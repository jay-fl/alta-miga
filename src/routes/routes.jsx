import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  useLocation,
} from "react-router-dom";

import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Productos from "../pages/Productos";
import Contacto from "../pages/Contacto";
import Header from "../components/Header";
import React, { useLayoutEffect } from "react";


export function MyRoutes() {


  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  

  return (
    <HashRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/productos" element={<Productos />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </Wrapper>
    </HashRouter>
  );
}
