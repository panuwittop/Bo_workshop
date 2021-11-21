// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// *********************************************** เรียกใช้ได้ทุกที่
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { onSigninPage } from "./pageObjects/singinPage";
import { onTopMenuPage } from "./pageObjects/topMenuPage";


    Cypress.Commands.add('loginToApplication', (email,password) =>{
       onTopMenuPage.clickSignInLink();
       onSigninPage.fillEmail(email);
       onSigninPage.fillPassword(password);
       onSigninPage.clickSigninButton();
    })