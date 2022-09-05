/**
 * ENV
 * @param key {string}
 * @param defaultValue {any?}
 * @return {number|string|null}
 */
export default function (key: string, defaultValue?: any): any {
  const value = process.env[key]

  if (value) {
    return typeof defaultValue === 'number' || defaultValue === Number ? (isNaN(+value) ? value : +value) : value
  } else {
    return defaultValue ?? null
  }
}
