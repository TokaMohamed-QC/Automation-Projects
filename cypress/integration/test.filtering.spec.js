/// <reference types="cypress" />

import { TodoPage } from "../pageobject/todo-page";



describe('Filtering', () => {
    const todopage = new TodoPage();
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/');
    
        cy.get('.new-todo').type("Hello{enter}")
        cy.get('.new-todo').type("Learn JavaScript{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        todopage.validateTodoTxt(3, 'Hello')
    })

    it('Should filter "Active" todos ',() => {
        cy.get(':nth-child(3) > .view > .toggle').click()
        cy.contains('Active').click()

        cy.get('.todo-list li').should('have.length', 2)
    })

    it('Should filter "Active" todos ',() => {
        cy.get(':nth-child(3) > .view > .toggle').click()
        cy.contains('Completed').click()

        cy.get('.todo-list li').should('have.length', 1)
    })

    it('Should filter "Active" todos ',() => {
        cy.contains('All').click()

        cy.get('.todo-list li').should('have.length', 3)
    })
})