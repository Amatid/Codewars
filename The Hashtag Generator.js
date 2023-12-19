//Задача на генерацию хештега
function generateHashtag(str) {
    for (let i = 0; i < str.length; i++) {
      let indexSpaces = str.indexOf(' ', i);
      if (indexSpaces !== -1) {
        i = indexSpaces;
        str =
          str.substring(0, indexSpaces + 1) +
          str.charAt(indexSpaces + 1).toUpperCase() +
          str.substring(indexSpaces + 2);
      }
    }
    str = str.replace(/\s/g, '');
    str = str.charAt(0).toUpperCase() + str.substring(1);
    if (str.length > 140 || str.length === 0) {
      return false;
    }
    return `#${str}`;
  }