describe('user form flow', () => {
	beforeEach(() => {
		cy.viewport(1600, 900);
		cy.visit('http://localhost:3000/');
	});

	it('user posts a tweet', () => {
		// Post a tweet
		cy.get('.compose-tweet-btn').click();
		cy.get('textarea[name="tweet"]').type(
			'What happened to all that fun you were having?! Come on, lets try to enjoy this!'
		);
		cy.wait(3000);
		cy.get('.post-tweet-btn').click();
	});

	it('user posts a second tweet', () => {
		// Post a tweet
		cy.get('.compose-tweet-btn').click();
		cy.get('textarea[name="tweet"]').type('That was an Attack on Titan easter egg 🥚 😄');
		cy.wait(3000);
		cy.get('.post-tweet-btn').click();
	});

	it('user posts a third tweet', () => {
		// Post a tweet
		cy.get('.compose-tweet-btn').click();
		cy.get('textarea[name="tweet"]').type(
			'The Rumbling arrives on Marley 😱 https://www.youtube.com/watch?v=wT2H68kEmi8'
		);
		cy.wait(3000);
		cy.get('.post-tweet-btn').click();
	});
});
