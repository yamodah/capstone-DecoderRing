// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphabetObjsArr = [
    { letter: "A", subChar: "" },
    { letter: "B", subChar: "" },
    { letter: "C", subChar: "" },
    { letter: "D", subChar: "" },
    { letter: "E", subChar: "" },
    { letter: "F", subChar: "" },
    { letter: "G", subChar: "" },
    { letter: "H", subChar: "" },
    { letter: "I", subChar: "" },
    { letter: "J", subChar: "" },
    { letter: "K", subChar: "" },
    { letter: "L", subChar: "" },
    { letter: "M", subChar: "" },
    { letter: "N", subChar: "" },
    { letter: "O", subChar: "" },
    { letter: "P", subChar: "" },
    { letter: "Q", subChar: "" },
    { letter: "R", subChar: "" },
    { letter: "S", subChar: "" },
    { letter: "T", subChar: "" },
    { letter: "U", subChar: "" },
    { letter: "V", subChar: "" },
    { letter: "W", subChar: "" },
    { letter: "X", subChar: "" },
    { letter: "Y", subChar: "" },
    { letter: "Z", subChar: "" },
  ];
  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    const alphArr = alphabet.split("");
    const uniqueAlphbetArr = [...new Set(alphArr)];
    if (uniqueAlphbetArr.length < alphabet.length || alphabet.length !== 26) {
      return false;
    }

    for (let i = 0; i < 26; i++) {
      const letterObj = alphabetObjsArr[i];
      const subAlphChar = alphabet[i];
      letterObj.subChar = subAlphChar;
    }
    if (encode === false || !encode) {
      function decoder(match) {
        const correctLetterObj = alphabetObjsArr.find((letterObj) =>
          letterObj.subChar.toLowerCase() === match ? true : false
        );

        if (!correctLetterObj) {
          const nonPresentChar = match;
          return nonPresentChar;
        }
        const decodedLetter = correctLetterObj.letter;
        return decodedLetter;
      }

      return input.replace(/[^\s]/g, decoder).toLowerCase();
    }

    function encoder(match) {
      const correctLetterObj = alphabetObjsArr.find((letterObj) =>
        letterObj.letter.toLowerCase() === match.toLowerCase() ? true : false
      );

      if (!correctLetterObj) {
        const nonPresentChar = match;
       
        return nonPresentChar;
      }
      const encodedLetter = correctLetterObj.subChar;
      return encodedLetter;
    }
    return input.replace(/[A-Za-z]/gi, encoder).toLowerCase();
  }
  /////////////////////////////////////
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
