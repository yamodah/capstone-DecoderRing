// Write your tests here!
/*
polybius()
The polybius() function in the src/polybius.js file has two parameters:

input refers to the inputted text to be encoded or decoded.
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
When encoding, your output should still be a string.
When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
Spaces should be maintained throughout.
Capital letters can be ignored.
The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.

*/

// make an object with letters as keys and their polybius number as a counterpart
// test that encoding results in a string not a number im assuming
//in input while decoding has an odd number of char (excluding spaces) function should return false
// make sure to account for i/j and show both as one item when decoding

// 321152543311 231144114411 = Hakuna Matata
// 4244 2351113334 3343 25432424425134 = it means no worries
const { describe } = require("mocha");
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");
describe("polybius()", () => {
  describe("Checking Parameters", () => {
    it("While decoding if the input has an odd number of characters (excluding spaces) return false ", () => {
      const oddInput = "321152543311 2311441144111";
      const actual = polybius(oddInput, (encode = false));
      expect(actual).to.be.false;
    });
  });
  describe("Encoding and Decoding", () => {
    it("When encoding a string should be returned", () => {
      const input = "Hakuna Matata";
      const actual = polybius(input, (encode = true));
      //console.log(actual)
      expect(typeof actual).to.equal("string");
    });
    it("should encode properly", () => {
      const input = "Hakuna Matata";
      const actual = polybius(input, (encode = true));
      const expected = "321152543311 231144114411";
      expect(actual).to.equal(expected);
    });
    it("When decoding and you encounter I or J display both options e.g.((i/j))", () => {
      const input = "4244 2351113334 3343 25432424425134";
      const actual = polybius(input, (encode = false));
      const expected = "(i/j)t means no worr(i/j)es";
      expect(actual).to.equal(expected);
    });
  });
});
