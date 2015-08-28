var assert = require('chai').assert;

module.exports = {
	'Wait for front page to render': function(client) {
		var frontPage = client.page.front();
		frontPage.navigate()
			.assert.title('Aftenposten', 'title is Aftenposten')
			.getElementSize('@topBanner', function(result) {
				assert.isAbove(result.value.height, 239, 'minimum topBanner height');
			});

		client.end();
	}
}
