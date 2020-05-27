describe ('Test App', () => {
    // test 1
    it ('launches', () => {
      cy.visit ('/');
    });

    // test 2
    it ('opens with student temperature table with correct 3 headers', () => {
        cy.visit ('/');
        cy.get('[data-cy=table]').should('contain', 'Student Name');
        cy.get('[data-cy=table]').should('contain', 'Latest Temperature');
        cy.get('[data-cy=table]').should('contain', 'Date of Temperature');
      });

      // all below are parts of test 3
      it('shows unhealthy students when "show unhealthy" button is selected', () => {
        cy.visit ('/');
        cy.get('[data-cy=unhealthy]').click();
        cy.get('[data-cy=table]').should('contain' ,'qrs7059');
        cy.get('[data-cy=table]').should('not.contain' ,'npv7128');
        cy.get('[data-cy=table]').should('not.contain' ,'xqv6932');

        cy.get('[data-cy=unhealthy]').click();
        cy.get('[data-cy=table]').should('contain' ,'qrs7059');
        cy.get('[data-cy=table]').should('contain' ,'npv7128');
        cy.get('[data-cy=table]').should('contain' ,'xqv6932');
      });

      it('shows correct students when healthy temperature guideline is changed', () => {
        cy.visit ('/');
        cy.get('[data-cy=change]').click();
        cy.get('[data-cy=unhealthy]').click();
        cy.get('[data-cy=table]').should('contain' ,'qrs7059');
        cy.get('[data-cy=table]').should('contain' ,'npv7128');
        cy.get('[data-cy=table]').should('contain' ,'xqv6932');
      });
  });