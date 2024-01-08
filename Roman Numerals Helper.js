class RomanNumerals {
  static toRoman(num) {
    let numToArray = num.toString().split('').reverse();
    const ROMANNUMBERS = [
      ['I', 'V', 'X'],
      ['X', 'L', 'C'],
      ['C', 'D', 'M'],
      ['M'],
    ];
    let result = '';
    numToArray.forEach((figure, index) => {
      figure = +figure;
      if (!figure) {
        return;
      }
      if (figure < 4) {
        result = fillUnits(figure, result, ROMANNUMBERS, index);
        return;
      }
      if (figure === 4) {
        result = result + ROMANNUMBERS[index][1] + ROMANNUMBERS[index][0];
        return;
      }
      if (figure < 9) {
        figure = figure - 5;
        result = fillUnits(figure, result, ROMANNUMBERS, index);
        result = result + ROMANNUMBERS[index][1];
        return;
      }
      if (figure === 9) {
        result = result + ROMANNUMBERS[index][2] + ROMANNUMBERS[index][0];
        return;
      }
    });
    result = result.split('').reverse().join('');
    return result;
    function fillUnits(number, fillingString, arrayOfData, indexOfArrayData) {
      while (number) {
        fillingString = fillingString + arrayOfData[indexOfArrayData][0];
        number--;
      }
      return fillingString;
    }
  }
  static fromRoman(str) {
    const ROMANNUMBERS = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    const PREVIEWNUMBERS = ['C', 'X', 'I'];
    let result = 0;
    const strToArray = str.split('');
    for (let i = 0; i < strToArray.length; i++) {
      let common = strToArray[i];
      let preview = strToArray[i - 1];
      if ((PREVIEWNUMBERS.some(element => element === preview)) && ROMANNUMBERS[preview] < ROMANNUMBERS[common]) {
        result = result + ROMANNUMBERS[common] - ROMANNUMBERS[preview] - ROMANNUMBERS[preview];
      } else {
        result = result + ROMANNUMBERS[common];
      }
    }
    return result;
  }
}
