//Задача на подсчет гласных
function countVowels(str) {
    let strToiterable = str.split('').filter((letter) => {
      return (
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u'
      );
    });
    return strToiterable.length;
  }