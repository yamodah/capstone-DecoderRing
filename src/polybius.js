// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
/*

\	1	2	3	4	5
1	A	F	L	Q	V
2	B	G	M	R	W
3	C	H	N	S	X
4	D	I	O	T	Y
5	E	K	P	U	Z

*/
const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusAlphabetObjects = [
    { letter: "A", number: 11 },
    { letter: "B", number: 21 },
    { letter: "C", number: 31 },
    { letter: "D", number: 41 },
    { letter: "E", number: 51 },
    { letter: "F", number: 12 },
    { letter: "G", number: 22 },
    { letter: "H", number: 32 },
    { letter: "(I/J)", number: 42 },
    { letter: "K", number: 52 },
    { letter: "L", number: 13 },
    { letter: "M", number: 23 },
    { letter: "N", number: 33 },
    { letter: "O", number: 43 },
    { letter: "P", number: 53 },
    { letter: "Q", number: 14 },
    { letter: "R", number: 24 },
    { letter: "S", number: 34 },
    { letter: "T", number: 44 },
    { letter: "U", number: 54 },
    { letter: "V", number: 15 },
    { letter: "W", number: 25 },
    { letter: "X", number: 35 },
    { letter: "Y", number: 45 },
    { letter: "Z", number: 55 },
  ];
  
  function polybius(input, encode) {
    if (encode !== false) {
      function encoder(str) {
        const encodedArr = [];
        let iteratorValue = 0;
        while (iteratorValue < str.length) {
          if (/\s/g.test(str[iteratorValue])) {
            encodedArr.push(str.charAt(iteratorValue));
          } else {
            const letterToBeCoded = str.charAt(iteratorValue);

            polybiusAlphabetObjects.forEach((letterObj) => {
              if (letterObj.letter.includes(letterToBeCoded.toUpperCase())) {
                encodedArr.push(letterObj.number);
              }
            });
          }

          iteratorValue++;
        }
        return encodedArr.join("").toLowerCase();
      }

      return encoder(input);
    } else if (encode === false) {
      const spacesRemoved = input.replace(/\s/g, "");
      if (spacesRemoved.length % 2 !== 0) {
        return false;
      }
      function decoder(str) {
        const decodedArr = [];
        let iteratorValue = 0;
        while (iteratorValue < input.length) {
          if (/\s/g.test(str[iteratorValue])) {
            decodedArr.push(str[iteratorValue]);
            iteratorValue++;
          } else {
            const codedNum = str.substr(iteratorValue, 2);

            polybiusAlphabetObjects.forEach((letterObj) => {
              if (letterObj.number == codedNum) {
                decodedArr.push(letterObj.letter);
              }
            });
            iteratorValue += 2;
          }
        }
        return decodedArr.join("").toLowerCase();
      }

      return decoder(input);
    }
  }
  //////////// dont write anything below this
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
