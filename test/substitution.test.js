// Write your tests here!
//test if alphabet.split.length is less than the unique array using set method vresion of itself
// test spaces and special characters (just make a regex that excludes when looking through the input)
//but specail characters can exist in the substitution alphabet
//possibly make a function that makes letter objects with alphbet letters as the key and the substitution char as the value
//send through an substitution alphabet with duplicate values
const expect = require("chai").expect;
const { describe } = require("mocha");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("Checking Parameters", () => {
    it("Should return false if Alphabet has repeating characters", () => {
      const input = "Hakuna Matata";
      const actual = substitution(input, "qazwsxedcrfvtgbyhnujmikoly"); //repeated "y"
      expect(actual).to.be.false;
    });
    it("Should return false if Alphabet does not 26 characters", () => {
      const input = "Hakuna Matata";
      const actual = substitution(
        input,
        "zdftyhnmkoiuytrfghjmkiuytrewasdcvbhjhgfdsxcdytrewqasxffcgh"
      );
      expect(actual).to.be.false;
    });
  });
  describe("Encoding and Decoding", () => {
    it("Should encode properly (meaning handle both spaces in the input as well as special characters in the alphabet)", () => {
      const alphabet = "*qazxswedcrfvbgty&#ujmkiol";
      const input = "@Hakuna Matata@";
      const expected = "@e*rjb* v*u*u*@";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
    });
    it("Should decode properly", () => {
      const alphabet = "*qazxswedcrfvbgty&#uj$kiol";
      const input = "@e*rjb* v*u*u*@";
      const expected = "@hakuna matata@";
      const actual = substitution(input, alphabet, false);
      expect(actual).to.equal(expected);
    });
  });
});
