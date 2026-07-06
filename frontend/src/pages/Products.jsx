import React from "react";
import Navbar from "../components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//importer axios pour faire des requetes http
import axios from "../api/axios";
// importer useEffect et useState pour faire des requetes http au chargement du composant
import { useEffect, useState } from "react";
//CartContext et UseContext pour gérer le panier
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


export default function Products() {
 // Récupèrer la fonction addToCart depuis le contexte du panier
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  //Récupérer les produits au chargement du composant
  useEffect(() => {
    axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container>
        <Row className="my-4" style={{ textAlign: "center" }}>
          <Col>
            <h1>Nos produits</h1>
          </Col>
        </Row>
        <Row>
          {/* Parcourir le tableau des produits et afficher chaque produit dans un composant Card. » */}
          {products.map((product) => (
            <Col md={3} key={product.id}>
              <Card style={{ width: "18rem", objectFit: "cover" }}>
                <Card.Img
                  variant="top"
                  src={`http://localhost:3000/uploads/${product.image}`}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price} $</Card.Text>
                  {/* Bouton pour ajouter au panier */}
                  <Button variant="primary" onClick={() => addToCart(product)}>
                    Ajouter au panier
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
