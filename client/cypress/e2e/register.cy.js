describe('template spec', () => {
  it('shows error message for passowrd length', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('input[name="firstname"]').type("kebede");
    cy.get('input[name="fathername"]').type("kebede");
    cy.get('.phone').type('1234567890');   
    cy.get('input[name="email"]').type("kebe23@gmail.com");
    cy.get('input[name="pass"]').type("kebede");
    cy.get('input[name="password"]').type("kebede");
    cy.get('button[type="submit"]').click();

 
  })
  it("should display error messages for invalid input", () => {
    cy.visit('http://localhost:3000/register')

    cy.get('button[type="submit"]').click();

    cy.contains("Please enter your first name.").should("be.visible");
    cy.contains("Please enter your last name.").should("be.visible");
    cy.contains("Please enter your email.").should("be.visible");
    cy.contains("Please enter your phone number.").should("be.visible");
    cy.contains("Please enter your password.").should("be.visible");
    cy.contains("Please confirm your password.").should("be.visible");

    cy.get('input[name="firstname"]').type("John");
    cy.get('input[name="fathername"]').type("kebede");
    cy.get('input[name="email"]').type("invalidemail@");
    cy.get('.phone').type('1234567890');   
    cy.get('input[name="pass"]').type("kebede");
    cy.get('input[name="password"]').type("kebe");
    cy.get('button[type="submit"]').click();

    cy.contains("Please enter a valid email address.").should("be.visible");
    cy.contains("Please enter a valid phone number.").should("be.visible");
    cy.contains("Password should be at least 8 characters long.").should("be.visible");
    cy.contains("Passwords do not match.").should("be.visible");
  });
  it("should display error messages for invalid input", () => {
    cy.visit('http://localhost:3000/register')
    cy.get('input[name="firstname"]').type("John");
    cy.get('input[name="fathername"]').type("kebede");
    cy.get('input[name="email"]').type("invalidemail");
    cy.get('.phone').type('1234567890');   
    cy.get('input[name="pass"]').type("kebede");
    cy.get('input[name="password"]').type("kebee");
    cy.get('button[type="submit"]').click();

    cy.contains("Please enter a valid email address.").should("be.visible");
    cy.contains("Please enter a valid phone number.").should("be.visible");
    cy.contains("Password should be at least 8 characters long.").should("be.visible");
    cy.contains("Passwords do not match.").should("be.visible");
  });
  it("should register a user and save data to the database", () => {
    cy.visit('http://localhost:3000/register')

    cy.get('input[name="firstname"]').type("John");
    cy.get('input[name="fathername"]').type("kebede");
    cy.get('input[name="email"]').type("johndoe@example.com");
    cy.get('.phone').type('990989898');   
    cy.get('input[name="pass"]').type("password123");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    cy.get('.Toastify__toast--success').should('contain', 'Registration successful');
    cy.url().should("include", "http://localhost:3000//login");
  });

})