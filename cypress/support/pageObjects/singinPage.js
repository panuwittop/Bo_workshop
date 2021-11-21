/// <reference types="cypress" />
export class SigninPage{

    fillEmail(email){
        cy.get('[placeholder="Email"]')
        .clear()
        .type(email)
        .should('have.value', email)
        
    }

    fillPassword(password){
        cy.get('[placeholder="Password"]')
        .clear()
        .type(password)
        .should('have.value', password)
        
    }
  
    clickSigninButton(){
        cy.intercept('POST', '**/api/users/login').as('login');
        cy.get('button').then(buttonElement => {
        const labeButton = buttonElement.text();
        expect(labeButton).to.contain('Sign in')
        expect(buttonElement).to.have.css('background-color', 'rgb(92, 184, 92)')
      })
        cy.get('button[type="submit"]').click({ force: true })
        cy.wait('@login');
        
    }

}

export  const  onSigninPage = new SigninPage;