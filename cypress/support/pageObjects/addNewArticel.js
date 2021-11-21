/// <reference types="cypress" />
export class AddnewArticel {

    fillArticle(article) {
        cy.get('.form-group').find('input').then(inputText => {
            cy.wrap(inputText)
                .eq(0)
                .type(article)
                .then(article => {
                    const usernameValue = inputText.eq(0).val();
                    expect(usernameValue).to.equal("IPhone 13 Promax(256GB)")
                })

        })
    }
    fillDescription(description) {
        cy.get('.form-group').find('input').then(inputText => {
            cy.wrap(inputText)
                .eq(1)
                .type(description)
                .then(description => {
                    const inputValue = inputText.eq(1).val();
                    expect(inputValue).to.equal("Price 39,000 Bath")
                })
        })

    }

    fillBody(body) {
        cy.get('.form-group').find('textarea').then(inputTextarea => {
            cy.wrap(inputTextarea)
                .eq(0)
                .type(body)
                .then(body => {
                    const usernameValue = inputTextarea.eq(0).val();
                    expect(usernameValue).to.equal("กราไฟต์, ทอง, เงิน, เซียร์ร่าบลู ดีไซน์ด้านหน้าแบบ Ceramic Shield ด้านหลังแบบกระจกผิวด้าน และสแตนเลสสตีล")
                })
        })

    }

    fillTag(Tag) {
        cy.get('.form-group').find('[placeholder="Enter tags"]').then(inputTags => {
            cy.wrap(inputTags)
                .type(Tag);

        })


    }
    clickAddArticleButton() {
        cy.contains('a', ' Publish Article ').click();
    }

}

export const onAddArticelPage = new AddnewArticel;