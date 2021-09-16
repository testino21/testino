describe ("Home Snapshot", () => {
    it("should take a screenshot from the home site", () => {
        cy.visit("http://localhost:4200/home");
        cy.wait(6000);
        cy.matchImageSnapshot();
    })
    
})