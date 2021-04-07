///<reference types="cypress" />

import staticData from '../fixtures/staticData.json'
import samplePage from '../support/pageObject/samplePage'

describe('Sample test for Zero Bank', () => {
	const sp = new samplePage()

	it('Verify the navigation to Zero Bank Offical Web', () => {
		cy.visit(staticData.appURL)
		cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
	})

	it('Submit Feedback Form', () => {
		sp.clickOnFeedbackButton()
		sp.feedbackHeading.should('have.text', 'Feedback')
		sp.enterUserName(staticData.userName)
		sp.enterEmailAddress(staticData.email)
		sp.enterSubject(staticData.subject)
		sp.enterComments(staticData.comments)
		sp.clickOnSendMessage()
		sp.thankYouMessage.should('contain', 'Thank you for your comments,')
	})
})
