function permutations(string) {
	function generateWordsRecursive(currentWord, remainingLetters, results) {
    if (remainingLetters.length === 0) {
      results.push(currentWord);
      return;
    }
    for (let i = 0; i < remainingLetters.length; i++) {
      const newWord = currentWord + remainingLetters[i];
      const newRemaining =
        remainingLetters.slice(0, i) + remainingLetters.slice(i + 1);
      generateWordsRecursive(newWord, newRemaining, results);
    }
  }
  const result = [];
  generateWordsRecursive('', string, result);
  const setUnique = new Set(result);
  return [...setUnique];
}