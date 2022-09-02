import redis from 'redis'

import env from './env'

/**
 * GET-REDIS-CLIENT
 * @param options
 * @return
 */
export default async function (options: redis.RedisClientOptions) {
  options ||= {
    socket: {
      host: env('REDIS_HOST', 'localhost'),
      port: env('REDIS_PORT', 6379)
    },
    database: env('REDIS_DATABASE', 0)
  }

  const client = redis.createClient(options)

  await client.connect()

  return client
}
