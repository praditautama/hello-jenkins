
describe('Click on article', function() {
  before(function() {
    casper.start('https://id.techinasia.com/')
  })

	it('should bring you to article details page', function() {
		
		casper.waitForSelector('div.post-list__left a', function(){
			this.click('div.post-list__left a');
		});
		
		casper.waitForSelector('article.post', function(){
			'article.post'.should.be.inDOM.and.be.visible;
		});
	});
})
