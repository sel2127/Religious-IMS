describe('template spec', () => {
  it('showing error message for unauthorizzed user', () => {
    cy.visit('http://localhost:3000/feedback/2'); // Assuming the FeedbackForm is rendered at '/feedback' route
    cy.get('button[name="edit-btn"]').should('be.visible').each((button) => {
      cy.wrap(button).click();
    });
    cy.get('textarea[name="message"]').type('New Message');
    cy.get('#submit').click();

    cy.wait(2000); // wait for 2 seconds
    //cy.get('.toast').should('contain', 'Unauthorized - you are not the owner of the feedback');
  })
 
})