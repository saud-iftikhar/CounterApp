describe('CounterApp', () => {
  it('verify if CounterApp is reachable', () => {
    cy.visit('http://localhost:3000/CounterApp')
  })


 
  it('verify if CounterApp contains "counter" text or not', () => {
    cy.visit('http://localhost:3000/CounterApp')
    cy.contains("Counter")
  })

  it("verify if button component is clickable by id ", () => {
    cy.visit("http://localhost:3000/CounterApp")
    cy.get("#increment").click()
    cy.url("include", "/login")
  })
})