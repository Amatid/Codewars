//Задача на отображение цифр как телефонного номера
function createPhonefigure(figures) {
    let figuresFromiterable = figures.join('');
    return `(${figuresFromiterable.slice(0, 3)}) ${figuresFromiterable.slice(
      3,
      6
    )}-${figuresFromiterable.slice(6)}`;
  }