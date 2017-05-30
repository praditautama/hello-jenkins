describe('Branded Content', function() {
  before(function() {
    casper.start('https://id.techinasia.com/')
  })

	it('should have an Branded Content in homepage', function(){
		casper.waitForSelector('div.branded-content', function() {
			'div.branded-content'.should.be.inDOM;
		});
	});

	it('should bring you to article details page', function() {
		
		casper.waitForSelector('div.post-list__left a', function(){
			this.click('div.post-list__left a');
		});
		
		casper.waitForSelector('article.post', function(){
			'article.post'.should.be.inDOM.and.be.visible;
		});
	});
})
