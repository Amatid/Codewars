//Задача на скрывание символов карты, кроме последних 4 цифр
function maskify(cc) {
    if (cc.length <= 4) {
      return cc;
    }
    const rest = cc.slice(cc.length - 4, cc.length);
    const newString = [];
    for (let i = 0; i < cc.length - 4; i++) {
      newString.push('#');
    }
    return `${newString.join('')}${rest}`;
  }