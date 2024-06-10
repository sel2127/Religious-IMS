describe('for donation', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  }),
  it('show successfull message for donation',()=>{
    cy.visit('http://localhost:3000/donate/c')
    cy.intercept('POST', 'http://localhost:5000/api/donations', {
      statusCode: 201,
      body: { message: 'Donation created successfully' },
    }).as(' Upload Event');
    cy.get('input[name="first_name"]').type("kebede");
    cy.get('input[name="last_name"]').type("abe");
    cy.get('input[name="email"]').type("kebe21@gmail.com");
    cy.get('input[name="tx_ref"]').type("kebi");
    cy.get('input[name="amount"]').type(1000);
    cy.get('select[name="currency"]').select('USD');
    cy.get('button[type="submit"]').click();
        cy.get('.Toastify__toast--success').should('contain', 'Donation successful');
//redirect to chapa site after sucessfull donation
    // cy.visit('https://api.chapa.co/v1/hosted/pay')


  })
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
    // cy.get('.error-message').should('contain', 'First Name is required');
    // cy.contains(" First Name is required").should("be.visible");

   

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

// describe('DonationChoice', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/donate/c')
//   });

//   it('displays validation errors for missing form fields', () => {
//     cy.get('button[type="submit"]').click();
//     cy.get('.text-red-500').should('have.length', 6); // Asserts that there are 6 error messages displayed
//     cy.contains('First Name is required');
//     cy.contains('Last Name is required');
//     cy.contains('Email is required');
//     cy.contains('Reference is required');
//     cy.contains('Amount is required');
//     cy.contains('Currency is required');
//   });

//   it('displays error message for duplicate transaction reference', () => {
//     cy.visit('http://localhost:3000/donate/c')

//     cy.intercept();
//     cy.route({
//       method: 'POST',
//       url: 'https://api.chapa.co/v1/hosted/pay',
//       response: { message: 'Transaction reference has been used before' },
//       status: 400,
//     });
//     cy.get('input[name="first_name"]').type('John');
//     // Fill in the rest of the form fields

//     cy.get('form').submit();
//     cy.get('.Toastify__toast-body').should('contain', 'Transaction reference has been used before. Please provide a unique reference.');
//   });

//   it('displays error message for general donation error', () => {
//     cy.intercept('POST', 'https://api.chapa.co/v1/hosted/pay', {
//       statusCode: 500,
//       body: {},
//     }).as('donate');

//     cy.get('input[name="first_name"]').type('John');
//     // Fill in the rest of the form fields

//     cy.get('button[type="submit"]').click();
//     cy.get('.Toastify__toast-body').should('contain', 'An error occurred during donation.');
//   });

//   // Add more test cases as needed
// });