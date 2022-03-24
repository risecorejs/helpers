/**
 * ENV
 * @param key {string}
 * @param defaultValue {any}
 * @return {any}
 */
module.exports = (key, defaultValue) => {
  return (typeof defaultValue === 'number' ? +process.env[key] : process.env[key]) ?? defaultValue ?? null
}
