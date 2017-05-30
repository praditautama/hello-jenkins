
describe('Navigation Header', function() {
  before(function() {
    casper.start('https://id.techinasia.com/')
  })

  it('should have an TIA ID Logo', function(){
		casper.waitForSelector('a.navbar-brand', function() {
			'a.navbar-brand'.should.be.inDOM;
		});
	});

	it('should have an main menu', function(){
		casper.waitForSelector('ul.main-nav', function() {
			'ul.main-nav'.should.be.inDOM;
		});
	});

	it('should have an search box', function(){
		casper.waitForSelector('form.navbar-form', function() {
			'form.navbar-form'.should.be.inDOM.and.be.visible;
		});
	});

	it('should have an profile dropdown', function(){
		casper.waitForSelector('ul.profile-nav', function() {
			'ul.profile-nav'.should.be.inDOM;
		});
	});
})
