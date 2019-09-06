var fs = require("fs");
var Visitor = require('../visitor');

describe("save", function () { 
  it('should create a json file', function () {
    let lindo = new Visitor("Lindo", "Ndamane", 11 / 2 / 2019, 2, "luu");
    expect(lindo.save()).toBeDefined();
  });
});

describe("load method", function () {
  it("should read content", function () {
    let lindo = new Visitor("Lindo", "Ndamane", 11 / 2 / 2019, 2, "luu");
    expect(lindo.load()).toBeDefined();
  })
  it("should return a json object", function () {
    let lindo = new Visitor("Lindo", "Ndamane", 11 / 2 / 2019, 2, "luu");
    let result = JSON.stringify(lindo)
    expect(lindo.load(1)).toBe(result);
  })
}) 
