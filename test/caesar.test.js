// Write your tests here!

const { describe } = require("mocha");
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");
/*
The caesar() function in the src/caesar.js file has three parameters:

input refers to the inputted text to be encoded or decoded.

shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") 
    whereas a negative number means shifting to the left (i.e. "M" becomes "K").

encode refers to whether you should encode or decode the message. By default it is set to true.
/////////////////////////////////////////////////////////////

When building the function, keep the following constraints and rules in mind:

If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.

Spaces should be maintained throughout, as should other non-alphabetic symbols. (maybe use a regex to help filter this out)
Capital letters can be ignored.(make sure test does .toLowerCase() to account for this when we do equals)

If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet 
(e.g. "z" becomes "c").

*/
describe("caesar", () => {
  describe("If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.", () => {
    const shift1 = undefined;
    const shift2 = 0;
    const shift3 = -26;
    const shift4 = 26;
    const input = "Hakuna Matata";
    const encode = true;
    it("if shift is undefined caesar() should return false", () => {
      const actual = caesar(input, shift1, encode);
      expect(actual).to.be.false;
    });
    it("if shift = 0 caesar() should return false", () => {
      const actual = caesar(input, shift2, encode);
      expect(actual).to.be.false;
    });
    it("if shift < -25 caesar() should return false", () => {
      const actual = caesar(input, shift3, encode);
      expect(actual).to.be.false;
    });
    it("if shift > 25 caesar() should return false", () => {
      const actual = caesar(input, shift4, encode);
      expect(actual).to.be.false;
    });
  });
  describe("Encoding and Decoding", () => {
    it("Spaces should be maintained throughout, as should other non-alphabetic symbols.", () => {
      const shift = 6;
      const input = "** Hakuna-Matata **";
      const encode = true;
      const actual = caesar(input, shift, encode);
      const expected = "** Ngqatg-Sgzgzg **";
      expect(expected.toLowerCase()).to.equal(actual.toLowerCase());
    });
    /* it("If a letter is shifted so that it goes off the alphabet it should wrap around to the front of the alphabet ", ()=>{
        const shift = 12
        const input = "Hakuna-Matata"
        const encode = true
        const actual =   caesar(input,shift,encode)
        const expected = "Tmwgzm-Ymfmfm"
        expect(expected.toLowerCase()).to.equal(actual.toLowerCase())
       })*/
    it("decode when encode param is false", () => {
      const shift = 12;
      const input = "Tmwgzm-Ymfmfm";
      const encode = false;
      const actual = caesar(input, shift, encode);
      const expected = "Hakuna-Matata";
      expect(expected.toLowerCase()).to.equal(actual.toLowerCase());
    });
  });
});
