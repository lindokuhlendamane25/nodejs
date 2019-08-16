visit = require('../visitor');
var visitor = new Visitor("Lindo", "Ndamane", 11 / 2 / 2019, 2, "luu");
describe("save", function () {
  it('should create a json file', function () {
    expect(visitor.save()).toContain("saved");
  });
});

describe("read", function () {
  it("should read content", function () {
    var result = visitor.load(1);
    expect(result).not.toBeNull();
  })
})
