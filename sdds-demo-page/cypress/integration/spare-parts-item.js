/// <reference types="cypress" />
// https://on.cypress.io/introduction-to-cypress

function newPageAssertion(url, headline) {
  cy.get('h1').should('contain', headline)
  cy.url().should('include', url)
}

describe('spare parts shop demo page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Page structure', () => {
    it('Banner is on top of page', () => {
      cy.get('.sdds-banner').should('be.visible')
    })

    it('Banner links to Deliveries & returns', () => {
      // Click banner link to go to Deliveries & returns page
      cy.get('.sdds-banner a')
        .should('contain', 'Deliveries & returns')
        .click()

      newPageAssertion('/deliveries', 'Deliveries & returns')
      cy.activeMenuItem()
    })
    it('Banner closes when user clicks cross', () => {
      cy.close('.sdds-banner-close')
      cy.get('.sdds-banner')
        .should('not.be.visible')
    })
    it('Banner stays closed when user goes to another page', () => {
      cy.close('.sdds-banner-close')
      // Go do different page
      // TODO Custom command for following link
      cy.get(':nth-child(1) > .sdds-sidebar-nav__item-link')
        .click()
      cy.get('.sdds-banner')
        .should('not.be.visible')
    })
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
      cy.topFooter(4, 20, ['Nothing', 'Deliveries & returns'])
    })

    it('Main footer content', () => {
      cy.mainFooter(['Legal link', 'Copyright Scania'])
    })
  })
  context('Items page', () => {

    it('has breadcrumbs of 3 levels', () => {
      cy.get('.sdds-breadcrumb a')
        .should('be.visible')
        .should('have.length', 3)
      // Last breadcrumb is active
      cy.get('.sdds-breadcrumb-item')
        .last()
        .should('have.class', 'sdds-breadcrumb-item-current')
    })

    it('add item to cart when clicking button', () => {
      cy.addToCart()
    })
    it('shows a badge when item is added to cart', () => {
      cy.addToCart()
      cy.get('sdds-badges').should('have.value', 1) 
      //TODO: Best way to target badge element?
    })
    it('cart has a tooltip when hovered', () => {
      cy.get('[data-cy="go-to-cart"]').trigger('mouseover')
      cy.get('sdds-tooltip').should('be.visible')
    })
    it('shows a toast when item is added to cart', () => {
      cy.addToCart()
      cy.get('.sdds-toast').should('be.visible')
    })
    it('toast has link to cart', () => {
      cy.addToCart()
      cy.get('.sdds-toast')
      cy.get('.sdds-toast a').should('have.attr', 'href', '/cart').click()
      newPageAssertion('/cart', 'My Cart')
      cy.activeMenuItem()
    })
    it('toast can be closed', () => {
      cy.addToCart()
      cy.close('.sdds-toast-dismiss')
      cy.get('.sdds-toast').should('not.be.visible')
    })
    // Not sure this function will be implemented
    it.skip('toast expires after 5 seconds', () => {
      cy.addToCart()
      cy.wait(5000)
      cy.get('.sdds-toast').should('not.be.visible')
    })
    it.skip('accordion items can open and close', () => {
      
      // Target accordion item #, click to open
      // Assert that child element in shadow DOM is visible
      // Target accordion item, click to close
      // Assert that child element in shadow DOM is not visible
      
    })
  })
})
