// Задача на расчет разницы между IP-адресами
function ipsBetween(start, end) {
    let startArr = start.split('.');
    let endArr = end.split('.');
    let sumArr = startArr.concat(endArr).reverse();
    const different = [];
    const arrFigures = sumArr.map((figure) => {
      figure = Number(figure);
      return figure;
    });
    let i = 0;
    while (i < 4) {
      different.push((arrFigures[i] - arrFigures[i + 4]) * Math.pow(256, i));
      i++;
    }
    return different.reduce((start, next) => start + next, 0);
  }