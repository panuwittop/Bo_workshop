/// <reference types="cypress" />

export class TopMenuPage{
    clickHomeLink(){
        cy.contains('a', 'Home').click();
    }
    clickSignInLink(){
        cy.contains('a', 'Sign in').click();
    }
    clickSignUpLink(){
        cy.contains('a', 'Sign up').click();
    }
    clickNewArticel(){
        cy.contains('a', 'New Article').click();
    }

}

export  const  onTopMenuPage = new TopMenuPage