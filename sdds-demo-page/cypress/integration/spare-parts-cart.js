/// <reference types="cypress" />
// https://on.cypress.io/introduction-to-cypress

describe('My Cart', () => {
  beforeEach(() => {
    cy.visit('/cart')
  })

  context('Page structure', () => {
    it('Has a header with features', () => {
      cy.checkHeader('My application')
    })

    it('Side menu navigation', () => {
      //TODO: Design requirement has a Side menu features 4 sub menus. "Lights" is selected. Change to assert design

      // NOTE: Assigns current development
      cy.sideMenuPageLinks(3)
    })

    it('Top footer content', () => {
      // Top footer features 4 sections with 5 links each = 20 links
      // All links read 'Nothing' except link to 'Deliveries & returns'
      cy.topFooter(4, 20, ['Link', 'Deliveries & returns'])
    })

    it('Main footer content', () => {
      cy.mainFooter(['Legal link', 'Copyright Scania'])
    })
  })

  context('My Cart page', () => {
    it('Page link is active', () => {
      cy.sideMenuPageLinks(3, 'Cart')
    })

    it('has a link to Deliveries & returns', () => {

    })

    it.only('form', () => {

      cy.get('#rb-option-1').check()
      cy.get('#rb-option-2').check()
      cy.get('#rb-option-3').check()

      const firstName = 'Anna'
      const lastName = 'Andersson'
      const address = 'Södertäljevägen 3'
      const zip = '123 45'
      const city = 'Södertälje'

      // Must chain .shadow() when input element is a web component
      cy.get('#shipping-first-name').shadow().find('[placeholder="First name"]').type(`${firstName}`, { force: true })
      cy.get('#shipping-last-name').shadow().find('[placeholder="Last name"]').type(`${lastName}`, { force: true })
      cy.get('#shipping-address').shadow().find('[placeholder="Address"]').type(`${address}`, { force: true })
      cy.get('#shipping-zip').shadow().find('[placeholder="Postal code"]').type(`${zip}`, { force: true })
      cy.get('#shipping-city').shadow().find('[placeholder="City"]').type(`${city}`, { force: true })

      // Dropdown element
      cy.get('#shipping-country-2').click({ force: true })
      cy.get('#shipping-country').should('have.attr', 'selected-value', 'option-2')
      cy.get('#shipping-country-1').click({ force: true })
      cy.get('#shipping-country').should('have.attr', 'selected-value', 'option-1')

      cy.get('[data-cy="submit"]').click()
    })


  })

})
