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
    cy.visit('/')
  })
  context('Banner', () => {
    it('links to Deliveries & returns', () => {
      // Click banner link
      cy.get('.sdds-banner a')
        .should('contain', 'Deliveries & returns')
        .click()
      newPageAssertion('/deliveries', 'Deliveries & returns')
      noActiveMenuItem()
    })
    it('closes when user clicks cross', () => {
      cy.get('.sdds-banner-close')
        .should('be.visible')
        .click()
      cy.get('.sdds-banner')
        .should('not.be.visible')
    })
    it('stays closed when user goes to another page', () => {
      cy.get('.sdds-banner-close')
        .click()
      cy.get(':nth-child(1) > .sdds-sidebar-nav__item-link')
        .click()
      cy.get('.sdds-banner')
        .should('not.be.visible')
    })
  })
  context('Item page', () => {
    it('has a banner on top of page', () => {
      cy.get('.sdds-banner').should('be.visible')
    })

    it('has a header with application name', () => {
      headerAssertions()
    })

    it.skip('has side menu with 4 sub menus', () => {
      //Side menu features 4 sub menus. "Lights" is selected.
      cy.get('.sdds-sidebar').should('be.visible')
      cy.get('.sdds-sidebar-nav__item-link').should('have.length', 3) //TODO: Change to sub menus with 4 items
      cy.contains('Lights').should('have.class', 'active')
    })

    it.skip('top footer content', () => {
      //Top footer features 4 sections, titled 'Title' with 5 links per section. ´
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
    it('has breadcrumbs', () => {
      //Page has breadcrumbs of 3 levels
      cy.get('.sdds-breadcrumb a')
        .should('be.visible')
        .should('have.length', 3)
        .should('contain', 'Page 1')
        .should('contain', 'Page 2')
        .should('contain', 'Page 3')
      cy.get('.sdds-breadcrumb-item').last().should('have.class', 'sdds-breadcrumb-item-current')
    })
  })

  context('Add item to cart', () => {
    it('add item to cart when clicking button', () => {
      cy.get('[data-cy="add-to-cart"]').click()
      cy.get('.cartsymbol > sdds-badges').should('have.value', 1)
    })
    it('shows a toast when item is added to cart', () => {
      cy.get('[data-cy="add-to-cart"]').should('be.visible').click()
      cy.get('.sdds-toast').should('be.visible')
      cy.get('.sdds-toast a').should('have.attr', 'href', '/deliveries')
    })
  })


})
