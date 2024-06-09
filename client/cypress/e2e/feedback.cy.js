describe('FeedbackForm', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  cy.get('.phone').type('995188680')  
    cy.get('input[name="password"]').type('1234512345');
    cy.get('button[type="submit"]').click();
    cy.visit('http://localhost:3000/');
    cy.visit('http://localhost:3000/feedbackform'); // Assuming the FeedbackForm is rendered at '/feedback' route
  });

  it('submits feedback successfully', () => {
    cy.intercept('POST', 'http://localhost:5000/api/feedback/create', {
      statusCode: 200,
      body: { message: 'Feedback submitted successfully' },
    }).as('submitFeedback');

    // Fill and submit the form
    cy.get('#message').type('This is my feedback');
    cy.get('#submit').click();

    // Verify the success message
    cy.get('.Toastify__toast--success').should('contain', 'Feedback submitted successfully!');

    // Verify navigation to the feedback page
    cy.url().should('include', '/feedback');
  });

  it('handles already submitted feedback', () => {
    cy.intercept('POST', 'http://localhost:5000/api/feedback/create', {
      statusCode: 400,
      body: { error: 'User has already submitted feedback' },
    }).as('submitFeedback');

    // Fill and submit the form
    cy.get('#message').type('This is my feedback');
    cy.get('#submit').click();

    // Verify the warning message
    cy.get('.Toastify__toast--warning').should('contain', 'You have already submitted feedback');

    // Verify no navigation occurs
    //cy.url().should('not.include', 'http://localhost:3000/feedback');
  });

  it('handles error submitting feedback', () => {
    cy.intercept('POST', 'http://localhost:5000/api/feedback/create', {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('submitFeedback');

    // Fill and submit the form
    cy.get('#message').type('This is my feedback');
    cy.get('#submit').click();

    // Verify the error message
    cy.get('.text-red-500').should('contain', 'Error submitting feedback. Please try again.');
  });
 
});