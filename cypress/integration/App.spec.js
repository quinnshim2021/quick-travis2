describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with student temperature table with correct 3 headers', () => {
        cy.visit ('/');
        cy.get('[data-cy=table]').should('contain', 'Student Name');
        cy.get('[data-cy=table]').should('contain', 'Latest Temperature');
        cy.get('[data-cy=table]').should('contain', 'Date of Temperature');
      });

    //   it('shows Winter courses when Winter is selected', () => {
    //     cy.visit ('/');
    //     cy.get('[data-cy=Winter]').click();
    //     cy.get('[data-cy=course]').should('contain' ,'Winter');
    //   });
  });