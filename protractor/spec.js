describe('Protractor Demo App', function () {
  it('should have a title', function () {
     browser.get('https://taru82.github.io/Courseera-test/');

   expect(browser.getTitle()).toEqual('Low Cohesion and High Coupling');
  });
});

// describe('Protractor Demo App', function() {
//   it('should have a title', function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//
//     expect(browser.getTitle()).toEqual('Super Calculator');
//   });
// });
