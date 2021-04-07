///<reference types="cypress" />

class samplePage {
	get feedbackButton() {
		return cy.get('#feedback')
	}

	get feedbackHeading() {
		return cy.get('#feedback-title')
	}

	get userName() {
		return cy.get('#name')
	}

	get emailAddress() {
		return cy.get('#email')
	}

	get subject() {
		return cy.get('#subject')
	}

	get commentArea() {
		return cy.get('#comment')
	}

	get sendMessageButton() {
		return cy.get('.btn-primary')
	}

	get thankYouMessage() {
		return cy.get('.offset3')
	}

	clickOnFeedbackButton() {
		this.feedbackButton.click()
	}

	enterUserName(uName) {
		return this.userName.type(uName)
	}

	enterEmailAddress(uEmail) {
		return this.emailAddress.type(uEmail)
	}

	enterSubject(uSubject) {
		return this.subject.type(uSubject)
	}

	enterComments(uComments) {
		return this.commentArea.type(uComments)
	}

	clickOnSendMessage() {
		this.sendMessageButton.click()
	}
}

export default samplePage
