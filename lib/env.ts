/**
 * ENV
 * @param key {string}
 * @param defaultValue {any}
 * @returns {number|string|null}
 */
export default function (key: string, defaultValue: any): any {
  if (process.env[key]) {
    return typeof defaultValue === 'number' || defaultValue === Number
      ? isNaN(+process.env[key])
        ? process.env[key]
        : +process.env[key]
      : process.env[key]
  } else {
    return defaultValue ?? null
  }
}
