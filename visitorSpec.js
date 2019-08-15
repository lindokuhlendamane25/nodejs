var visit = require("../src/visitor");
describe("spies", function () {
  var visitor = new Visitor("lindo", "ndamane", 11 / 2 / 2019, 2, "luu");
  it('should spy on save', function () {
    var spy = spyOn(visitor, 'save');
    visitor.save();
    expect(spy).toHaveBeenCalled();
  })
})
describe("read", function () {
  var visitor = new Visitor("Sam", "Silika", 24 / 07 / 2019, 2, "buhle");
  it("should read content", function () {
    var result = visitor.load(1);
    expect(result).not.toBeNull();
  })
})
