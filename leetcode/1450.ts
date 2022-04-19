function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  /**
   * - Create a variable called matches
   * - Loop startTime
   * - Check if start value >= queryTime and end <= queryTime
   * - Return matches
   */

  let matches = 0;

  for (let i = 0; i < startTime.length; i++) {
    const start = startTime[i];
    const end = endTime[i];

    if (queryTime >= start && queryTime <= end) matches++;
  }

  return matches;
}
