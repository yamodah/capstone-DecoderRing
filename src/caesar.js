// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  /*alphabet array of object so that each letter is the key 
    and its value is its number in the alphabet*/
  const alphabet = [
    { letter: "A", number: 1 },
    { letter: "B", number: 2 },
    { letter: "C", number: 3 },
    { letter: "D", number: 4 },
    { letter: "E", number: 5 },
    { letter: "F", number: 6 },
    { letter: "G", number: 7 },
    { letter: "H", number: 8 },
    { letter: "I", number: 9 },
    { letter: "J", number: 10 },
    { letter: "K", number: 11 },
    { letter: "L", number: 12 },
    { letter: "M", number: 13 },
    { letter: "N", number: 14 },
    { letter: "O", number: 15 },
    { letter: "P", number: 16 },
    { letter: "Q", number: 17 },
    { letter: "R", number: 18 },
    { letter: "S", number: 19 },
    { letter: "T", number: 20 },
    { letter: "U", number: 21 },
    { letter: "V", number: 22 },
    { letter: "W", number: 23 },
    { letter: "X", number: 24 },
    { letter: "Y", number: 25 },
    { letter: "Z", number: 26 },
  ];

  function caesar(input, shift, encode = true) {
    const onlyLetters = /[A-Za-z]/gi;

    //filter out bad shift values
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    } else if (!encode) {
      function replacerDecodeFinder(macth) {
        const letterObj = alphabet.filter((alphObj) => {
          if (alphObj.letter.toLowerCase() === macth.toLowerCase()) {
            return alphObj;
          }
        });
        // need a conditonal of sorts to catch the negative shift or incorporate that into the else if

        const newNumber = letterObj[0].number - shift;

        if (newNumber >= 1 && newNumber <= 26) {
          const newLetter = alphabet.filter((alphObj) => {
            if (alphObj.number === newNumber) {
              return alphObj;
            }
          });
          return newLetter[0].letter;
        } else if (newNumber > 26) {
          const newLetter = alphabet.filter((alphObj) => {
            if (alphObj.number === newNumber - 26) {
              return alphObj;
            }
          });
          return newLetter[0].letter;
        } else {
          const wrapAroundLetter = alphabet.filter((alphObj) => {
            if (alphObj.number === 26 + newNumber) {
              return alphObj;
            }
          });
          return wrapAroundLetter[0].letter;
        }
      }
      return input.replace(onlyLetters, replacerDecodeFinder).toLowerCase();
    }
    function replacerEncodeFinder(macth) {
      const letterObj = alphabet.filter((alphObj) => {
        if (alphObj.letter.toLowerCase() === macth.toLowerCase()) {
          return alphObj;
        }
      });
      const newNumber = letterObj[0].number + shift;
      if (newNumber <= 26 && newNumber > 0) {
        const newLetter = alphabet.filter((alphObj) => {
          if (alphObj.number === newNumber) {
            return alphObj;
          }
        });
        return newLetter[0].letter;
      } else if (newNumber <= 0) {
        const newLetter = alphabet.filter((alphObj) => {
          if (alphObj.number === 26 + newNumber) {
            return alphObj;
          }
        });
        return newLetter[0].letter;
      } else {
        const wrapAroundLetter = alphabet.filter((alphObj) => {
          if (alphObj.number === newNumber - 26) {
            return alphObj;
          }
        });
        return wrapAroundLetter[0].letter;
      }
    }

    return input.replace(onlyLetters, replacerEncodeFinder).toLowerCase();
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
