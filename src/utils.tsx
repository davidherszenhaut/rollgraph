import { Data } from "./Types";

/**
 *
 * @param min The lower bound for the random number.
 * @param max The upper bound for the random number.
 * @returns A random integer between `min` and `max`.
 */
export function generateRandomIntegerInclusive(
  min: number,
  max: number
): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 *
 * @param faces The highest number that the die can roll.
 * @param times How many times the die will be rolled.
 * @returns An array of die rolls based on `faces` and `times`.
 */
export function rollDice(faces: number, times: number): number[] {
  const rolls: number[] = [];
  for (let i = 0; i < times; i++) {
    rolls.push(generateRandomIntegerInclusive(1, faces));
  }
  return rolls;
}

export interface Data {
  value: number;
  count: number;
}

/**
 *
 * @param rolls An array of die rolls.
 * @returns An array of `Data` objects where each `Data.value` is the face number and `Data.count` is the number of times that face value was rolled.
 */
export function aggregateData(rolls: number[]): Array<Data> {
  const counts: { [key: number]: number } = {};
  for (let i = 0; i < rolls.length; i++) {
    if (counts[rolls[i]]) {
      counts[rolls[i]] = counts[rolls[i]] + 1;
    } else {
      counts[rolls[i]] = 1;
    }
  }
  const aggregation: Data[] = [];
  for (const [number, count] of Object.entries(counts)) {
    aggregation.push({ value: parseInt(number), count: count });
  }
  return aggregation;
}
