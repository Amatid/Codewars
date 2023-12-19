//Задача на составление масива уникальных символов
let uniqueInOrder = function (iterable) {
    let repeatedSymbol = null;
    const arrResult = [];
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] === repeatedSymbol) {
        continue;
      }
      arrResult.push(iterable[i]);
      repeatedSymbol = iterable[i];
    }
    return arrResult;
  };