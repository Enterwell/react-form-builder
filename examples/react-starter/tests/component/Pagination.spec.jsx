// Mount import
import { mount } from '@cypress/react';

// Component import
import Pagination from '../../components/Pagination/Pagination';

/**
 * Pagination component tests.
 */
describe('Pagination', () => {
  /**
   * Testing that the component correctly renders without passing any props.
   */
  it('Shows pagination component with default props', () => {
    mount(<Pagination />);

    cy.get('[class*="pagesList"]')
      .children()
      .should('have.length', 3);

    cy.get('[class*=Item-previousNext]')
      .should('have.length', 2);

    cy.get('[class*=Item-page]')
      .should('have.length', 1);
  });

  /**
   * Testing that the pagination pages can be cycled through by using page buttons.
   */
  it('Can switch between pages using page buttons', () => {
    mount(<Pagination count={2} />);

    cy.get('[class*=Item-page]')
      .eq(0)
      .should('have.class', 'Mui-selected');

    cy.get('[class*=Item-page]')
      .eq(1)
      .should('not.have.class', 'Mui-selected');

    cy.get('[class*=Item-page]')
      .eq(1)
      .click();

    cy.get('[class*=Item-page]')
      .eq(0)
      .should('not.have.class', 'Mui-selected');

    cy.get('[class*=Item-page]')
      .eq(1)
      .should('have.class', 'Mui-selected');
  });

  /**
   * Testing that the pagination pages can be cycled through by using arrow buttons.
   */
  it('Can switch between pages using arrow buttons', () => {
    mount(<Pagination count={2} />);

    cy.get('[class*=Item-previousNext]')
      .eq(0)
      .should('be.disabled');

    cy.get('[class*=Item-previousNext]')
      .eq(1)
      .should('not.be.disabled');

    cy.get('[class*=Item-page]')
      .eq(0)
      .should('have.class', 'Mui-selected');

    cy.get('[class*=Item-page]')
      .eq(1)
      .should('not.have.class', 'Mui-selected');

    cy.get('[class*=Item-previousNext]')
      .eq(1)
      .click();

    cy.get('[class*=Item-page]')
      .eq(0)
      .should('not.have.class', 'Mui-selected');

    cy.get('[class*=Item-page]')
      .eq(1)
      .should('have.class', 'Mui-selected');

    cy.get('[class*=Item-previousNext]')
      .eq(0)
      .should('not.be.disabled');

    cy.get('[class*=Item-previousNext]')
      .eq(1)
      .should('be.disabled');
  });
});
