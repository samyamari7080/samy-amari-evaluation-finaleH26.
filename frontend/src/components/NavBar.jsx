import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
//CartContext et UseContext pour gérer le panier
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function NavBar() {
  // Récupèrer la fonction addToCart depuis le contexte du panier
  const { cart } = useContext(CartContext);
  // Calculer le nombre total d'articles dans le panier
  const totalItems = (cart || []).reduce(
  (total, item) => total + item.quantity, 0
);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <i className="fa fa-shopping-cart"></i> E-Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              {" "}
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              {" "}
              Produits
            </Nav.Link>
            <Nav.Link as={Link} to="/categories">
              Catégories
            </Nav.Link>
          </Nav>

          {/* Bloc du panier à droite avec icône font-awesome */}
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <i className="fa fa-shopping-cart"></i> Panier ({totalItems})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
