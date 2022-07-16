// describe("testing todo app", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000/");
//   });

//   it("should visit correctly", () => {
//     cy.focused().should("have.id", "todo-inp");
//     cy.get("[data-testid=todo-inp]").type("hello");
//   });

// todo-inp
// todo-btn
// todo-item-checkbox
// todo-item-val

//   it("should add element to list", () => {
// type get by testid and type
//     let value = "Bushra";
//     cy.get("[data-testid=todo-inp]").type(value);

// click get by testid and click
//     cy.get("[data-testid=todo-btn]").click();

// check if list has the element // get by test id and check value
//     cy.get("[data-testid=todo-item-val]").eq(-1).should("contain", value);
//     cy.get("[data-testid=todo-item-checkbox]").eq(-1).should("be.checked");
//   });
// });

//-------------------------------------------------------------------------------------------------------------------------------

// MOCK API

// create json RESPONSE FILE FOR POSTtODO
// cy.intercept("POST", url, {fixture}).as()
// cy.wait() ? wait after click of add button
// then check the value

describe("testing todo app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should visit correctly", () => {
    cy.wait("getTodos");
    cy.focused().should("have.id", "todo-inp");
    cy.get("[data-testid=todo-inp]").type("hello");
  });

  it.only("should add element to list", () => {
    let value = "Bushra Jabeen";

    cy.intercept("POST", "http://localhost:4004/todos", {
      fixture: "postTodo.json",
    }).as("postTodo");

    cy.get("[data-testid=todo-inp]").type(value);

    cy.get("[data-testid=todo-btn]").click();

    cy.get("[data-testid=todo-item-val]").eq(-1).should("contain", value);
    cy.get("[data-testid=todo-item-checkbox]").eq(-1).should("be.checked");
  });
});
