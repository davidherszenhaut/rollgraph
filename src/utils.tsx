export function generateRandomIntegerInclusive(
  min: number,
  max: number
): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function rollDice(faces: number, times: number): number[] {
  const rolls: number[] = [];
  for (let i = 0; i < times; i++) {
    rolls.push(generateRandomIntegerInclusive(1, faces));
  }
  return rolls;
}
