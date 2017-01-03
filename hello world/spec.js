describe('Dummy', function() {
  it('has a dummy spec to test 2 + 2', function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect(4).toEqual(4);
  });
});

describe('homeController', function(){
	beforeEach(module('helloWorld'));

	var $compile,
		$rootScope;

	beforeEach(inject(function(_$compile_, _$rootScope_) {
      	$compile = _$compile_;
    	$rootScope = _$rootScope_;
    }));

	it('sets the div with id="main" content to value "Hello John Doe!"', function() {
		var elementDiv = $compile('<div id="main">Hello {{name}}!</div>')($rootScope);
		$rootScope.name = 'John Doe';
		$rootScope.$digest();

		expect(elementDiv.html()).toContain('Hello John Doe!');
	});
})