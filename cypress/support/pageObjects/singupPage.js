/// <reference types="cypress" />
export class SignupPage{
    fillUsername(username){
        cy.get('[placeholder="Username"]')
            .clear()
            .type(username)
            .should('have.value', username)

        
    }
    fillPassword(password){
        cy.get('[placeholder="Password"]')
        .clear()
        .type(password)
        .should('have.value', password)
        
    }
    fillEmail(email){
        cy.get('[placeholder="Email"]')
        .clear()
        .type(email)
        .should('have.value', email)
        
    }
    clickSignupButton(){
        cy.get('button[type="submit"]').click();
        
    }

}

export  const  onSignupPage = new SignupPage;