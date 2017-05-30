describe('Homepage', function() {
  before(function() {
    casper.start('https://id.techinasia.com/')
  })

  it('should show page title: Tech in Asia Indonesia - Komunitas Online Startup di Asia', function() {
    casper.then(function() {
      'Tech in Asia Indonesia - Komunitas Online Startup di Asia'.should.matchTitle
    })
  })

	it('should have an main navigation header', function(){
		casper.waitForSelector('nav#main-nav', function() {
			'nav#main-nav'.should.be.inDOM.and.be.visible;
		});
	});

  it('should have an back to top icon', function(){
		casper.waitForSelector('span.back-to-top', function() {
			'span.back-to-top'.should.be.inDOM;
		});
	});

  it('should have an posts in homepage', function(){
		casper.waitForSelector('div.infinite-scroll', function() {
			'div.infinite-scroll'.should.be.inDOM.and.be.visible;
		});
	});

  it('should have an Featured Posts in homepage', function(){
		casper.waitForSelector('div.featured-post', function() {
			'div.featured-post'.should.be.inDOM.and.be.visible;
		});
	});
})
