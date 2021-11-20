export const countWords = (sentence) => {
  let wordList = {};

  for (let word of sentence.match(/\w+('d|'ll|'m|'clock|'re|'s|'t|'ve)?/g)) {
    word = word.toLowerCase();

    if (wordList[word]) wordList[word] += 1;
    if (!wordList[word]) wordList[word] = 1;
  }

  return wordList;
};
