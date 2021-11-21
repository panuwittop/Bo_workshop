/// <reference types="cypress" />

import { onAddArticelPage } from "../support/pageObjects/addNewArticel";
import { onglobalFeed } from "../support/pageObjects/globalFeed";
import { onSigninPage } from "../support/pageObjects/singinPage";
import { onSignupPage } from "../support/pageObjects/singupPage"
import { onTopMenuPage } from "../support/pageObjects/topMenuPage"

/////  Random ${id}  /////
const   uuid = () => Cypress._.random(0, 1e6);
const   id = uuid();

describe('page object', () => {
    beforeEach(() => {
        // cy.visit('http://localhost:4200/')
        cy.visit('/')
    
      })
    it('Sign up success', () => {
        const username = `toptest${id}`
        const email = `toptest_${id}@gmail.com`
        onTopMenuPage.clickSignUpLink();
        onSignupPage.fillUsername(username);
        onSignupPage.fillEmail(email);
        onSignupPage.fillPassword('toptest');
        onSignupPage.clickSignupButton();

    })
    
    it('Sign in success', () => {
        onTopMenuPage.clickSignInLink();
        onSigninPage.fillEmail('toptest_001@hotmail.com');
        onSigninPage.fillPassword('Toptest001');
        onSigninPage.clickSigninButton();

    })

    it('Add new article success', () => {
        cy.loginToApplication('toptest_001@hotmail.com','Toptest001');
        onTopMenuPage.clickNewArticel();
        onAddArticelPage.fillArticle("IPhone 13 Promax(256GB)");
        onAddArticelPage.fillDescription("Price 39,000 Bath");
        onAddArticelPage.fillBody("กราไฟต์, ทอง, เงิน, เซียร์ร่าบลู ดีไซน์ด้านหน้าแบบ Ceramic Shield ด้านหลังแบบกระจกผิวด้าน และสแตนเลสสตีล");
        onAddArticelPage.fillTag("ISO{enter}");
        onAddArticelPage.fillTag("ANDROID{enter}");
        // onAddArticelPage.clickAddArticleButton();
    })    

    it('Chack Global Feed', () => {
        cy.loginToApplication('toptest_001@hotmail.com','Toptest001');
        onSigninPage.clickSigninButton();
        onglobalFeed.clickAddFavorite();
        onglobalFeed.clickDeleteFavorite();
    }) 
})