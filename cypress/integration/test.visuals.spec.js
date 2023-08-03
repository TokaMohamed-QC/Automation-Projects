/// <reference types="cypress" />

import * as todoPage from '../pageobject/todo-page'

describe('todo list actions', () => {
before (() => todoPage.navigate())
beforeEach (() => cy.eyesOpen({appName: 'TAU TodMVC', batchName: 'TAU TodoMVC'}))
afterEach(() => cy.eyesClose())
it('should look good', () => {
    cy.eyesCheckWindow('empty todo list')
    todoPage.addTodo('Clean room')
    todoPage.addTodo('Learn')
    cy.eyesCheckWindow('2 todos')
    cy.get(':nth-child(0) > .view > .toggle').click()
    cy.eyesCheckWindow('mark as completed')
})

})