describe('Funcionalidade: Administrar Reservas de livros', () => {

    beforeEach(() => {
        cy.loginApp('usuario@teste.com', 'user123')
        //cy.loginApp(Cypress.expose('USER_EMAIL'), Cypress.expose('USER_SENHA'))
        //cy.loginToken(Cypress.env('TOKEN_COMUM'))
    });
    
    it('Deve exibir as reservas via intercept', () => {
        cy.fixture('reservas').then((dadosReserva) =>{
            cy.intercept('GET', 'api/reservations', {
            statusCode: 200,
            body: dadosReserva
        }).as('listarReservas')

        cy.visit('dashboard.html')
        cy.wait('@listarReservas')

        })
        
        
    });

});