module.exports = {
	'Read top 3 news on the front page': function(client) {
		client.url('http://fastenposten.herokuapp.com/')
			.waitForElementVisible('body', 1000)
			.end();
	}
}