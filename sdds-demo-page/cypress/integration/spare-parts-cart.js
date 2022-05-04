/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

const application_name = 'My application'

function noActiveMenuItem () {
  cy.get('.sdds-sidebar-nav__item a').should('not.have.class', 'active')
}

function newPageAssertion(url, headline) {
    cy.get('h1').should('contain', headline)
    cy.url().should('include', url)
}

function headerAssertions() {
  //Header features {application name}, {cart symbol}, {profile symbol} and {Scania symbol}. Cart symbol has no badge.
  cy.get('.sdds-nav').should('be.visible')
  cy.get('.sdds-nav__app-name').should('contain', `${application_name}`)
  cy.get('[data-cy="go-to-cart"]').should('be.visible')
  cy.get('.sdds-nav__right > :nth-child(1)').should('be.visible')
  cy.get('sdds-badge').should('not.be.visible')
  cy.get('.user-avatar').should('be.visible')
  cy.get('.sdds-nav__app-logo').should('be.visible')
}

describe('spare parts shop demo page', () => {
  beforeEach(() => {
    cy.visit('/cart')
  })
  
  context('Page structura', () => {
    it('has a header with features', () => {
      headerAssertions()
    })

    it.skip('has side menu with 4 sub menus', () => {
      //Side menu features 4 sub menus. "Lights" is selected.
      cy.get('.sdds-sidebar').should('be.visible')
      cy.get('.sdds-sidebar-nav__item-link').should('have.length', 3) //TODO: Change to sub menus with 4 items
      cy.contains('Lights').should('have.class', 'active')
    })

    it.skip('top footer content', () => {
      // Top footer features 4 sections, titled 'Title' with 5 links per section. ´
      // All links read 'Nothing' except link to 'Deliveries & returns'.
      cy.get('.sdds-footer-top').should('be.visible')
      cy.get('.sdds-footer-title').should('have.length', 4)
      cy.get('.sdds-footer-top a').should('have.length', 20)
      .should('contain', 'Nothing')
      .should('contain', 'Deliveries & returns')
    })
    it('main footer content', () => {
      //Main footer features 'Legal link', copyright information and Scania wordmark.
      cy.get('.sdds-footer-main')
        .should('be.visible')
        .should('contain', 'Legal link')
        .should('contain', 'Copyright Scania')
      cy.get('.sdds-footer-main-brand')
        .should('have.css', 'background-image', 'url("https://cdn.digitaldesign.scania.com/logotype/1.0.0/scania_wordmark-white/scania-wordmark-white.svg")')
    })
    
  })

  context('My Cart page', () => {
    it('has a link to Deliveries & returns', () => {
      cy.visit('/cart')
      // Target link
      //newPageAssertion('/deliveries', 'Deliveries & returns')
      //noActiveMenuItem()
    })

    it.only('form', () => {
      cy.visit('/cart')

      //cy.contains('Option 1').parent().find('input[type=radio]').check()
      //cy.contains('Option 2').parent().find('input[type=radio]').check()
      //cy.contains('Option 3').parent().find('input[type=radio]').check()

      cy.get('#rb-option-1').check()
      cy.get('#rb-option-2').check()
      cy.get('#rb-option-3').check()

      const firstName = 'Anna'
      const lastName = 'Andersson'
      const address = 'Södertäljevägen 3'
      const zip = '123 45'
      const city = 'Södertälje'
      
      // Must chain .shadow() when input element is a web component
      cy.get('#shipping-first-name').shadow().find('[placeholder="First name"]').type(`${firstName}`, {force: true})
      cy.get('#shipping-last-name').shadow().find('[placeholder="Last name"]').type(`${lastName}`, {force: true})
      cy.get('#shipping-address').shadow().find('[placeholder="Address"]').type(`${address}`, {force: true})
      cy.get('#shipping-zip').shadow().find('[placeholder="Postal code"]').type(`${zip}`, {force: true})
      cy.get('#shipping-city').shadow().find('[placeholder="City"]').type(`${city}`, {force: true})
      
      // Dropdown element
      cy.get('#shipping-country-2').click({force: true})
      cy.get('#shipping-country').should('have.attr', 'selected-value', 'option-2')
      cy.get('#shipping-country-1').click({force: true})
      cy.get('#shipping-country').should('have.attr', 'selected-value', 'option-1')

      cy.get('[data-cy="submit"]').click()
    })
    
    it('form', () => {



    })

  })

})
