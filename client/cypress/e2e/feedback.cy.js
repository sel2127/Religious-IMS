describe('FeedbackForm', () => {
  beforeEach(() => {
    // Run any necessary setup before each test
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
  it('clicking the edit button on the feedback detail page edits the feedback', () => {
    cy.visit('http://localhost:3000/feedback'); // Assuming the FeedbackForm is rendered at '/feedback' route
    cy.get('button[name="btn"]').eq(0).click();

    // Get the edit button from the feedback detail page
// Get the edit button from the feedback detail page
// cy.get('button[name="edit-btn"]').should('be.visible').each((button) => {
//   cy.wrap(button).click();
// });    
    // Verify that the edit form is rendered
    cy.get('form[name="edit-feedback"]').should('be.visible');
    
    // Fill in the edit form with new data
    cy.get('textarea[name="message"]').type('New Message');
    
    // Submit the edit form
    cy.get('form[name="edit-feedback"]').submit();
    
    // Verify that the feedback has been updated
    cy.visit('http://localhost:3000/feedback'); // Assuming the updated feedback is rendered at '/feedback' route
    // cy.get(`h1:contains("New Title")`).should('be.visible');
  });
});