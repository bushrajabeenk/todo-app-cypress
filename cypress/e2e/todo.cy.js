describe("testing todo app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should visit correctly", () => {
    cy.focused().should("have.id", "todo-inp");
    cy.get("[data-testid=todo-inp]").type("hello");
  });

  it("should add element to list", () => {
    // type get by testid and type
    let value = "Bushra";
    cy.get("[data-testid=todo-inp]").type(value);

    // click get by testid and click
    cy.get("[data-testid=todo-btn]").click();

    // check if list has the element // get by test id and check value
    cy.get("[data-testid=todo-item-val]").eq(-1).should("contain", value);
    cy.get("[data-testid=todo-item-checkbox]").eq(-1).should("be.checked");
  });
});

// todo-inp
// todo-btn
// todo-item-checkbox
// todo-item-val
