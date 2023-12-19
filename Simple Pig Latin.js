//Задача на удаление символов и добавление "ау"
function pigIt(str) {
    return str
      .split(' ')
      .map((word) => {
        if (word.match(/[?!.,;#]/g)) {
          return word;
        }
        const wordArr = word.split('');
        let firstLetter = wordArr.shift();
        wordArr.push(firstLetter + 'ay');
        return wordArr.join('');
      })
      .join(' ');
  }