/**
 * ENV
 * @param key
 * @param defaultValue
 * @returns {number|string|null}
 */
module.exports = (key, defaultValue) => {
  return (typeof defaultValue === 'number' ? +process.env[key] : process.env[key]) ?? defaultValue ?? null
}
