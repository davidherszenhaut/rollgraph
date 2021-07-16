import { generateRandomIntegerInclusive } from './utils';

const min:number = Math.floor(Math.random() * 10);
const max:number = Math.floor(Math.random() * 10);

test('Generates an integer', () => {
  expect(typeof generateRandomIntegerInclusive(min, max)).toBe('number')
})

test('Generates an integer greater than or equal to min', () => {
  expect(generateRandomIntegerInclusive(min, max)).toBeGreaterThanOrEqual(min)
})

test('Generates an integer less than or equal to max', () => {
  expect(generateRandomIntegerInclusive(min, max)).toBeLessThanOrEqual(max)
})
