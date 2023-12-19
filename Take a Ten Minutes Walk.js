//Задача на хождение 10 шагов в стороны светов с целью вернуться в то же место
function isValidWalk(walk) {
    if (walk.length !== 10) {
      return false;
    }
    const directions = { e: 0, w: 0, s: 0, n: 0 };
    walk.forEach((direction) => {
      switch (direction) {
        case 'e':
          directions.e++;
          break;
        case 'w':
          directions.w++;
          break;
        case 's':
          directions.s++;
          break;
        case 'n':
          directions.n++;
          break;
      }
    });
  
    if (directions.e === directions.w || directions.s === directions.n) {
      return true;
    }
  }