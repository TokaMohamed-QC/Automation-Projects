export class TodoPage
{ 
    navigate(){
    cy.visit('http://todomvc-app-for-testing.surge.sh/');
    }

    addTodo(todoText){
        cy.get('.new-todo').type(todoText + "{enter}")
    }

    validateTodoTxt(todoIndex, expectedText){
        cy.get(`.todo-list :nth-child(${todoIndex}) > .view > label`).should('have.text', expectedText)
    }
}