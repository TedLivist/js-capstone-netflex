import { showsCount } from "../src/modules/counters";

test('returns 6 when length of array is 6', () => {
  const list = [{item: 3}, {item: 4}, {item: 5}, {item: 1}, {item: 2}, {item: 10}]
  const count = showsCount(list)
  expect(count).toBe(6)
})

test('returns 1 when array length is 1', () => {
  const list = [{item: 4}]
  const count = showsCount(list)
  expect(count).toBe(1)
})

test('returns 0 when array is empty', () => {
  const list = []
  const count = showsCount(list)
  expect(count).toBe(0)
})