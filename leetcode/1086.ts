const sum = (nums: number[]): number => nums.reduce((acc, n) => (acc += n), 0);

function highFive(items: number[][]): number[][] {
  const averages: Record<string, number[]> = {};
  const studentsRank: number[][] = [];

  for (let [id, score] of items) {
    if (averages[id]) {
      averages[id].push(score);
    } else {
      averages[id] = [score];
    }
  }

  for (let id in averages) {
    const scores = averages[id].sort((a, b) => b - a);
    const total = sum(scores.slice(0, 5));
    const average = Math.floor(total / 5);

    studentsRank.push([+id, average]);
  }

  return studentsRank;
}
