describe("bla", () => {
    it("evnsb", () => {
            cy.visit('https://angelpeca07.github.io/pokedex/');
            cy.wait(500)     
    });
    it("Should click on the name of the pokemons", () => {
        cy.contains('bulbasaur').click();
    });

    it("Should click on the next button", () => {
        cy.get('#next').click();
    });
})