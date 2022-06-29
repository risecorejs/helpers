const redis = require('redis')

const env = require('./env')

/**
 * GET-REDIS-CLIENT
 * @param options
 * @returns {Promise<RedisClient<RedisDefaultModules & RedisModules, RedisFunctions, RedisScripts> & WithCommands & WithModules<RedisDefaultModules & RedisModules> & WithFunctions<RedisFunctions> & WithScripts<RedisScripts>>}
 */
module.exports = async (options) => {
  options ||= {
    socket: {
      host: env('REDIS_HOST', 'localhost'),
      port: env('REDIS_PORT', 6379),
      database: env('REDIS_DATABASE', 0)
    }
  }

  const client = redis.createClient(options)

  await client.connect()

  return client
}
