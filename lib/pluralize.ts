/**
 * PLURALIZE
 * @param number {number}
 * @param words {string[]}
 * @param concat {boolean?}
 * @return {string}
 */
export default function (number: number, words: string[], concat?: boolean): string {
  const _number = +String(number).replaceAll('.', '')

  const result = words[_number % 100 > 4 && _number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][Math.min(_number % 10, 5)]]

  return concat ? number + ' ' + result : result
}
