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
        result = result + fillUnits(figure, result, ROMANNUMBERS, index);

        return;
      }
      if (figure === 4) {
        result = ROMANNUMBERS[index][1] + ROMANNUMBERS[index][0];
        return;
      }
      if (figure < 9) {
        figure = figure - 5;
        result = result + fillUnits(figure, result, ROMANNUMBERS, index);
        result = ROMANNUMBERS[index][1];
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
    return 4;
  }
}
