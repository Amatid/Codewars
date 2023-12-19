//Задача на удаление противоположных сторон света следующих друг за другом
function dirReduc(arr) {
    arr.forEach((direction, indexStart) => {
      direction = direction.toUpperCase();
      switch (direction) {
        case 'SOUTH':
          findAndDeleteOpposite(arr, 'NORTH', indexStart);
          break;
        case 'NORTH':
          findAndDeleteOpposite(arr, 'SOUTH', indexStart);
          break;
        case 'WEST':
          findAndDeleteOpposite(arr, 'EAST', indexStart);
          break;
        case 'EAST':
          findAndDeleteOpposite(arr, 'WEST', indexStart);
          break;
      }
    });
    function findAndDeleteOpposite(arr, direction, start) {
      let next = arr[start + 1];
      if (next === direction && next) {
        arr.splice(start + 1, 1);
        arr.splice(start, 1);
        dirReduc(arr);
      } else {
        return;
      }
    }
    return arr;
  }