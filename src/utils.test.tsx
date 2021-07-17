import { generateRandomIntegerInclusive, rollDice } from './utils';

let min:number = Math.floor(Math.random() * 10);
let max:number = Math.floor(Math.random() * 10);
if (min > max) {
  [min, max] = [max, min];
}
const times:number = Math.floor(Math.random() * 10)
const rolls:number[] = rollDice(max, times);

test('Generates an integer', () => {
  expect(typeof generateRandomIntegerInclusive(min, max)).toBe('number')
})

test('Generates an integer greater than or equal to min', () => {
  expect(generateRandomIntegerInclusive(min, max)).toBeGreaterThanOrEqual(min)
})

test('Generates an integer less than or equal to max', () => {
  expect(generateRandomIntegerInclusive(min, max)).toBeLessThanOrEqual(max)
})


test('rollDice returns an array', () => {
  expect(Array.isArray(rolls)).toBe(true);
});

test('rollDice return an array with correct length', () => {
  expect((rolls.length === times)).toBe(true);
});

test('rollDice returns an array where all elements are within constraints', () => {
  let checks:boolean[] = [];
  rolls.forEach((roll) =>{
    if (typeof roll === "number" && roll >= min && roll <= max) {
      checks.push(true);
    }
  });
  expect(checks.every((check) => check === true)).toBe(true);
});