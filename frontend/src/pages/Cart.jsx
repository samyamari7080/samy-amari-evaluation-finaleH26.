// Créer une page Cart e-commerce React complète
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import NavBar from "../components/NavBar";
export default function Cart() {
  // Utiliser CartContext avec useContext
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  // Calcul total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <NavBar />
      <Container className="cart-container">
        <Row>
          <Col>
            <h1>Mon Panier</h1>
          </Col>
        </Row>
        {/* afficher la liste des produits avec leur image du panier dans un tableau avec possibilité de modifier quantité et supprimer */}
        {/* afficher la liste des produits du panier et le résumé  */}
        <Row>
          <Col md={8}>
            {/* Tableau des produits */}
            {/* intégrer des icônes fontawesome */}
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Produit</th>
                  <th>Prix</th>
                  <th>Quantité</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    {/* Image du produit http://localhost:3000/uploads/${item.image} */}
                    <td>
                      <img
                        className=""
                        src={`http://localhost:3000/uploads/${item.image}`}
                        alt={item.name}
                        width="100"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price} $</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                      />
                    </td>
                    <td>{item.price * item.quantity} $</td>
                    <td>
                      <button
                        onClick={() =>
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) removeFromCart(item.id);
                            Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success",
                            });
                          })
                        }
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
          <Col md={4}>
            {/* Résumé du panier */}
            <div className="cart-summary">
              <h2>Résumé du panier</h2>
              <p>Total : {total.toFixed(2)} $</p>
              <button>
                <i className="fas fa-shopping-cart"></i> Commander
              </button>
              <button
                onClick={() =>
                  cart.length > 0 && removeFromCart(cart.map((item) => item.id))
                }
              >
                <i className="fas fa-trash"></i> Vider le panier
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Résumé du panier */}
    </div>
  );
}

// Afficher liste des produits du panier
// Permettre modification quantité, suppression produit
// Calculer total dynamique
// Ajouter résumé avec bouton commander et vider panier
// Utiliser react-bootstrap pour le layout
