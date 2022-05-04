Cypress.Commands.add('close', (element) => {
    cy.get(element)
        .click()
})

Cypress.Commands.add('goToPage', (url, headline) => {
    cy.visit(url)
    cy.assertpage(url, headline)
})

Cypress.Commands.add('assertPage', (url, headline) => {
    cy.url().should('include', url)
    
    headline !== undefined
    ?   cy.get('h1').contains(headline)
    : ''
})

Cypress.Commands.add('addToCart', () => {
    cy.get('[data-cy="add-to-cart"]').click()
})

Cypress.Commands.add('activeMenuItem', (menuItem) => {
    menuItem === undefined ?
        cy.get('.sdds-sidebar-nav__item a')
            .should('not.have.class', 'active')
        : ''
})

Cypress.Commands.add('checkHeader', (appName, badgeValue) => {
    //Header features {application name}, {cart symbol}, {profile symbol} and {Scania symbol}. Cart symbol has no badge.
    cy.get('.sdds-nav')
        .should('be.visible')
    cy.get('.sdds-nav__app-name')
        .should('contain', `${appName}`)
    cy.get('[data-cy="go-to-cart"]')
        .should('be.visible')
        .should('have.attr', 'href', '/cart')

    badgeValue === undefined
        ? cy.get('sdds-badges')
            .should('not.exist')
        : cy.get('sdds-badges')
            .should('have.value', badgeValue)

    cy.get('.user-avatar')
        .should('be.visible')
    cy.get('.sdds-nav__app-logo')
        .should('be.visible')
})

Cypress.Commands.add('sideMenuPageLinks', (length, activePage) => {
    cy.get('.sdds-sidebar').should('be.visible')

    length !== undefined
        ? cy.get('.sdds-sidebar-nav__item-link').should('have.length', length)
        : ''

    activePage === undefined
        ? ''
        : activePage === false
            ? noActiveMenuItem()
            : cy.contains(activePage).should('have.class', 'active')
})

Cypress.Commands.add('topFooter', (numberOfSections, numberOfLinks, links) => {
    cy.get('.sdds-footer-top')
        .should('be.visible')
    cy.get('.sdds-footer-title')
        .should('have.length', numberOfSections)
    cy.get('.sdds-footer-top a')
        .should('have.length', numberOfLinks)

    links !== undefined ?
        links.forEach(link => {
            cy.get('.sdds-footer-top a')
                .should('contain', link)
        })
        : ''
})

Cypress.Commands.add('mainFooter', (elements) => {
    cy.get('.sdds-footer-main')
        .should('be.visible')

    elements.forEach(element => {
        cy.get('.sdds-footer-main')
            .should('contain', element)
    })

    cy.get('.sdds-footer-main-brand')
        .should('have.css', 'background-image', 'url("https://cdn.digitaldesign.scania.com/logotype/1.0.0/scania_wordmark-white/scania-wordmark-white.svg")')
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
