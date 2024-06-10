
describe('login test', () => {
  it('successfully logs in with valid credentials', () => {
    cy.visit('http://localhost:3000/login'); // Assuming the updated feedback is rendered at '/feedback' route
  
    cy.wait(2000); // Wait for 2 seconds before selecting the element
    cy.get('.phone').type('995188680')  
    cy.get('input[name="password"]').type('1234512345');
    cy.get('button[type="submit"]').click();
    cy.visit('http://localhost:3000/');
  
  
  });
  it('shows  error message  for the phone filed is empty and password is correct', () => {
    cy.visit('http://localhost:3000/login'); // Assuming the updated feedback is rendered at '/feedback' route
  
    cy.wait(2000); // Wait for 2 seconds before selecting the element
    cy.get('.phone').type('1234567890');   
     cy.get('input[name="password"]').clear();
    cy.get('button[type="submit"]').click();
  
  
  });
  it('shows  error message for invalidcredientials', () => {
    cy.visit('http://localhost:3000/login'); // Assuming the updated feedback is rendered at '/feedback' route
  
    cy.wait(2000); // Wait for 2 seconds before selecting the element
    cy.get('.phone').type('1234567890');   
     cy.get('input[name="password"]').type("invalid");
    cy.get('button[type="submit"]').click();
  
  
  });
});


