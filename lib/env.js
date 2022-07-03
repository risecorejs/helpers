/**
 * ENV
 * @param key
 * @param defaultValue
 * @returns {number|string|null}
 */
module.exports = (key, defaultValue) => {
  if (process.env[key]) {
    return typeof defaultValue === 'number' || defaultValue === Number ? +process.env[key] : process.env[key]
  } else {
    return defaultValue ?? null
  }
}
