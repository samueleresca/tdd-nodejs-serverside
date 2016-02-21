//FIX to the error : "expect is not defined"
var expect = chai.expect;


//describe Telefilm tests
describe('Tests', function() {
  var empty_string;
//Before the execution, initialize the object
  before(function() {
      empty_string= "";
  });
  //LIst of tests
  it('should be string empty', function() {
    expect(empty_string).to.be.equals('');
  });

});
