describe('for donation', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  }),
  
  it('show error for all fileds are empty',()=>{
    cy.visit('http://localhost:3000/login'); 
  
    cy.wait(2000); 
    cy.get('.phone').type('995188680')  
    cy.get('input[name="password"]').type('1234512345');
    cy.get('button[type="submit"]').click();
    //  cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/donate/c')
    cy.get('input[name="first_name"]').clear();
    cy.get('input[name="last_name"]').clear();
    cy.get('input[name="email"]').clear();
    cy.get('input[name="tx_ref"]').clear();
    cy.get('input[name="amount"]').clear();
    cy.get('select[name="currency"]').select('USD');
    cy.get('button[type="submit"]').click();


  })
  it('show successfull message for donation',()=>{
    cy.visit('http://localhost:3000/donate/c')
    cy.intercept('POST', 'http://localhost:5000/api/donations', {
      statusCode: 201,
      body: { message: 'Donation created successfully' },
    }).as(' Upload Event');
    cy.get('input[name="first_name"]').type("kebede");
    cy.get('input[name="last_name"]').type("abe");
    cy.get('input[name="email"]').type("kebe21@gmail.com");
    cy.get('input[name="tx_ref"]').type("maste");
    cy.get('input[name="amount"]').type(1000);
    cy.get('select[name="currency"]').select('USD');
    cy.get('button[type="submit"]').click();
    //cy.get('.Toastify__toast--success').should('contain', 'Donation successful');


  })
  it('show error for registration for invalid email',()=>{
    cy.visit('http://localhost:3000/donate/c')
    cy.get('input[name="first_name"]').type("kebede");
    cy.get('input[name="last_name"]').type("abe");
    cy.get('input[name="email"]').type("kebe21@gmail");
    cy.get('input[name="tx_ref"]').type("abcd");
    cy.get('input[name="amount"]').type(1234);
    cy.get('select[name="currency"]').select('USD');
    cy.get('button[type="submit"]').click();

  })
})