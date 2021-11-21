/// <reference types="cypress" />
describe('TC_0001_The system should be able to login successfully', () => {
  beforeEach(() => {

    cy.intercept('GET', '**/api/tags', { fixture: 'tags.json' });
    cy.visit('http://localhost:4200/')

  })
  it.only('Verify that add new article', () => {
    cy.contains('a', 'Sign in').click();
    cy.contains('div.row', 'Sign in').find('input').then(inputText => {
      cy.wrap(inputText)
        .eq(0)
        .type("toptest_001@hotmail.com")
        .then(a => {
          const usernameValue = inputText.eq(0).val();
          expect(usernameValue).to.equal("toptest_001@hotmail.com")
        })

      cy.wrap(inputText)
        .eq(1)
        .type("Toptest001")
        .then(a => {
          const password = inputText.eq(1).val();
          expect(password).to.equal("Toptest001")
        })

      ///// Button submit  /////
      cy.intercept('POST', '**/api/users/login').as('login');
      cy.get('button').then(buttonElement => {
        const labeButton = buttonElement.text();
        expect(labeButton).to.contain('Sign in')
        expect(buttonElement).to.have.css('background-color', 'rgb(92, 184, 92)')
      })
      cy.get('button[type="submit"]').click({ force: true })
      cy.wait('@login');


      ////  Input Text New Article ////
      cy.contains('a', 'New Article').click();
      cy.get('.form-group').find('input').then(inputText => {
        cy.wrap(inputText)
          .eq(0)
          .type("IPhone 13 Promax(256GB)")
          .then(a => {
            const usernameValue = inputText.eq(0).val();
            expect(usernameValue).to.equal("IPhone 13 Promax(256GB)")
          })

        cy.wrap(inputText)
          .eq(1)
          .type("Price 39,000 Bath")
          .then(a => {
            const inputValue = inputText.eq(1).val();
            expect(inputValue).to.equal("Price 39,000 Bath")
          })

        cy.get('.form-group').find('textarea').then(inputTextarea => {
          cy.wrap(inputTextarea)
            .eq(0)
            .type("กราไฟต์, ทอง, เงิน, เซียร์ร่าบลู ดีไซน์ด้านหน้าแบบ Ceramic Shield ด้านหลังแบบกระจกผิวด้าน และสแตนเลสสตีล")
            .then(a => {
              const usernameValue = inputTextarea.eq(0).val();
              expect(usernameValue).to.equal("กราไฟต์, ทอง, เงิน, เซียร์ร่าบลู ดีไซน์ด้านหน้าแบบ Ceramic Shield ด้านหลังแบบกระจกผิวด้าน และสแตนเลสสตีล")
            })


          /////  Input Tags /////

          cy.get('.form-group').find('[placeholder="Enter tags"]').then(inputTags => {
            cy.wrap(inputTags)
              .type('IOS{enter}')
              .then(IOS => {
                cy.get('[class="tag-list"]').eq(0).should('contain', 'IOS');
              })

            cy.wrap(inputTags)
              .type('Apple{enter}')
              .then(a => {
                cy.get('.tag-default').eq(1).should('contain', 'Apple');
              })

          })


        })
      })

    })/////  Delete Tags /////
    cy.get('.tag-default').eq(0).find('.ion-close-round').click();
    cy.get('.tag-default').eq(0).should('contain', 'Apple');
    cy.get('.tag-default').eq(1).should('not.exist');

    cy.get('button').then(buttonElement => {
      const labeButton = buttonElement.text();
      expect(labeButton).to.contain(' Publish Article ')
      expect(buttonElement).to.have.css('background-color', 'rgb(92, 184, 92)')

    })

  })

  it('Stub Articel', () => {
    cy.contains('a', 'Sign in').click();
    cy.contains('div.row', 'Sign in').find('input').then(inputText => {
      cy.wrap(inputText)
        .eq(0)
        .type("toptest_001@hotmail.com")
        .then(a => {
          const usernameValue = inputText.eq(0).val();
          expect(usernameValue).to.equal("toptest_001@hotmail.com")
        })

      cy.wrap(inputText)
        .eq(1)
        .type("Toptest001")
        .then(a => {
          const password = inputText.eq(1).val();
          expect(password).to.equal("Toptest001")
        })


      ///// Button submit  /////
      cy.intercept('POST', '**/api/users/login').as('login');
      // cy.intercept('POST', '**/api/users/login', { fixture: 'loginSuccess.json' }).as('login');
      cy.get('button').then(buttonElement => {
        const labeButton = buttonElement.text();
        expect(labeButton).to.contain('Sign in')
        expect(buttonElement).to.have.css('background-color', 'rgb(92, 184, 92)')
      })
      cy.get('button[type="submit"]').click({ force: true })
      cy.wait('@login');

      /// HOME WORK //// 

      cy.intercept('GET', '**/api/articles**', { fixture: 'articles.json' });
      cy.wait(3000);
      cy.intercept('POST', '**/api/articles/TOPTEST-212/favorite').as('favorite');
      cy.contains('a', 'Global Feed').click();
      // cy.wait('@favorite');
      cy.get('app-favorite-button').eq(0).should('contain', '0');
      cy.get('.btn-outline-primary')
          .should('have.css', 'background-color')
          .and('eq', 'rgba(0, 0, 0, 0)')

      cy.intercept('POST', '**/api/articles/TOPTEST-212/favorite').as('favorite');
      cy.get('app-favorite-button').eq(0).click();
      cy.wait('@favorite');
      cy.get('app-favorite-button').eq(0)
          .should('contain', '1');
      cy.get('.btn-primary')
          .should('have.css', 'border-color')
          .and('eq', 'rgb(65, 150, 65)')


      cy.intercept('DELETE', '**/api/articles/TOPTEST-51/favorite').as('favorite');
      cy.get('app-favorite-button').eq(0).click();
      cy.wait('@favorite');
      cy.get('app-favorite-button').eq(0)
      .should('contain', '0');
      cy.get('.btn-outline-primary')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(92, 184, 92)')


    })
  })  
  it('Stub Articel', () => {

  })
})


// describe('TC_0002_First Spec file', () => {
//   it('displays register form test case 2', () => {
//     cy.contains('a', 'Sign up').click();
//     cy.get('h1.text-xs-center').should('contain', 'Sign up');
//     const inputElement = cy.contains('div.row','Sign up').find('input');
//     inputElement.eq(0)
//             .clear()
//             .type('toptes_002');

//     cy.contains('div.row','Sign up')
//           .find('input').eq(1)
//           .clear()
//           .type('toptest_002@hotmail.com');

//     cy.contains('div.row','Sign up')
//           .find('input').eq(2)
//           .clear()
//           .type('Toptest002');

//     cy.get('button[type="submit"]').click()
//     cy.get('ul.error-messages').should('contain','email has already been taken');
//     cy.get('ul.error-messages').should('contain','username has already been taken');
//   })

// })

