var assert = require('chai').assert;

module.exports = {
	'Wait for front page to render': function(client) {
		var frontPage = client.page.front();

		frontPage.navigate()
			.waitForElementVisible('body', 1000)
			.assert.title('Aftenposten', 'title is Aftenposten')
			.getElementSize('@topBanner', function(result) {
				assert.isAbove(result.value.height, 239, 'minimum topBanner height');
			});

		client.elements('css selector', 'article', function(result) {
			assert.isAbove(result.value.length, 50, 'minimum expected num of articles');
		});

		client.end();
	}
}
