import { getCommentCount } from "../src/modules/counters";


// const getCommentCount = (section, lists) => {
//   section.textContent = '';
//   lists.length >= 1
//     ? (section.textContent = `Comments (${lists.length})`)
//     : (section.textContent = `Comments (0)`);
// };

test('returns 1 when length is one', () => {
  const container = { textContent: 'lorem' }
  const arr = [{item: 1}]
  getCommentCount(container, arr)
  expect(container.textContent).toBe('Comments (1)')
})

test('returns 2 when length is two', () => {
  const container = { textContent: 'ipsum' }
  const arr = [{item: 1}, {item: 2}]
  getCommentCount(container, arr)
  expect(container.textContent).toBe('Comments (2)')
})

test('returns 0 when length is 0', () => {
  const container = { textContent: 'hello' }
  const arr = []
  getCommentCount(container, arr)
  expect(container.textContent).toBe('Comments (0)')
})

