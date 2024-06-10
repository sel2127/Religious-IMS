describe('template spec', () => {
  it('showing error message for unauthorizzed user', () => {
    cy.visit('http://localhost:3000/feedback/2'); 
    cy.get('button[name="edit-btn"]').should('be.visible').each((button) => {
      cy.wrap(button).click();
    });
    cy.get('textarea[name="message"]').type('New Message');
    cy.get('#submit').click();

    cy.wait(2000); // wait for 2 seconds
    cy.get('.Toastify__toast--error').should('contain', 'An error occurred while updating feedback. Please try again.');
  })
 
})