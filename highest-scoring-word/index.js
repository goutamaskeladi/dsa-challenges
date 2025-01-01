// Given a string of words, you need to find highest scoring word. Each letter of word scores points according to its
// position in the alphabet a = 1, b = 2, c = 3 and so on. You need to return highest scoring word as a string.
// highestScoringWord('man i need a taxi up to ubud') // 'taxi'

function highestScoringWord(str) {
  const words = str.split(" ");
  const scores = words.map((word) => {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt();
    }
    return score - 96;
  });
  let highestScore = 0;
  let highestIndex = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }
  return words[highestIndex];
}

console.log(highestScoringWord("man i need a taxi up to ubud")); // ubud
