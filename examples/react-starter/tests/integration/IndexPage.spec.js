/**
 * Index page tests.
 */
describe('Index page', () => {
  /**
   * Testing that the index page has link to page with pokemons.
   */
  it('has link to pokemons page', () => {
    cy.visit('/');

    cy.wait(3000);
    cy.screenshot('index-page');

    cy.get('a[href*="pokemons"]')
      .click();

    cy.location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/pokemons');
      });
  });
});
