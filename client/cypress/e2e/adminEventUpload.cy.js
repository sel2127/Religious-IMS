
describe('Event Upload', () => {
  it('submits event successfully', () => {
    cy.visit('http://localhost:3000/admin/event')

    cy.intercept('POST', 'http://localhost:5000/upload', {
      statusCode: 200,
      body: { message: 'Event uploaded Successfully' },
    }).as(' Upload Event');

    // Fill and submit the form
  cy.get('input[name="eventname"]').type('Example Event');
  cy.get('input[name="eventDesc"]').type('Example event description');

    cy.get('input[name="eventdate"]').type('2024-06-12');

    // Upload an image file
    const imagePath = 'abat.jpg';
    cy.get('[name="image"]').attachFile(imagePath);

    cy.get('.event').click();

    // Verify the success message
    cy.get('.Toastify__toast--success').should('contain', 'Event uploaded Successfully');

    cy.visit('http://localhost:3000/admin/dashboard');
  });
 
  it('show error message for name is emepty', () => {
    cy.visit('http://localhost:3000/admin/event')
  
      cy.get('input[name="eventname"]').clear();
      cy.get('input[name="eventDesc"]').type('Example event description');
  
      cy.get('input[name="eventdate"]').type('2024-06-12');
  
      // Upload an image file
      const imagePath = 'abat.jpg';
      cy.get('[name="image"]').attachFile(imagePath);
  
      cy.get('.event').click();
  
   
    });
    it('show error message for empty fileds', () => {
      cy.visit('http://localhost:3000/admin/event')
    
        cy.get('input[name="eventname"]').clear();
        cy.get('input[name="eventDesc"]').type('Example event description');
    
        // Set the event date using the date picker
        cy.get('input[name="eventdate"]').clear();
    
        // Upload an image file
        const imagePath = 'abat.jpg';
        cy.get('[name="image"]').attachFile(imagePath);
    
        cy.get('.event').click();
    
      
      });
     
});