/// <reference types="cypress" />

import { TodoPage } from "../pageobject/todo-page";

describe('todo list actions', () => {
    const todopage = new TodoPage();

    beforeEach(() => {
        todopage.navigate();
        todopage.addTodo('Hello');
    })
    it('Go to the App', () => {
       
    
        cy.get('label').should('have.text','Hello')
    
        cy.get('.toggle').should('not.be.checked')
    
    })
    
    it("should mark the task", () => {
        cy.get('.toggle').click()
    
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
    
    
    it("list should not be displayed", () => {
        cy.get('.toggle').click()
        
        cy.contains('Clear').click()
    
        cy.get('.new-todo').should('not.have.descendants', 'li')
    })
})

