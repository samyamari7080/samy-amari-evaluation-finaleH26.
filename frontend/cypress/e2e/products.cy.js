describe('Panier E-Shop', () => {
  it('Ajoute des produits au panier et vérifie l\'affichage', () => {
    cy.visit('http://localhost:5173/products');

    cy.contains('Ajouter au panier').first().click();

    cy.get('a, button').contains('Panier').click();

    cy.contains('Mon Panier').should('be.visible');

    cy.get('table').should('be.visible');
  });
});