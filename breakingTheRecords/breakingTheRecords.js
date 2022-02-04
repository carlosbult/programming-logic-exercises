function breakingRecords(scores) {
  let scoresGames = scores[1];
  let init = scoresGames[0];

  let min = init;
  let max = init;

  let minCount = 0;
  let maxCount = 0;

  scoresGames.forEach((score) => {
    if (score < min) {
      min = score;
      minCount++;
    }

    if (score > max) {
      max = score;
      maxCount++;
    }
  });

  let result = [maxCount, minCount];

  return result;
}

let scores1 = [[9], [10, 5, 20, 20, 4, 5, 2, 25, 1]]; // max = 2; min = 4
let scores2 = [[10], [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]]; // max = 4; min = 0

breakingRecords(scores1);
breakingRecords(scores2);
