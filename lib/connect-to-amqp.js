const amqplib = require('amqplib')

const env = require('./env')

/**
 * CONNECT-TO-RABBITMQ
 * @param callback
 * @param options
 * @returns {Promise<void>}
 */
module.exports = async (callback, options) => {
  const connection = await amqplib.connect(env('RABBITMQ_URL', 'amqp://localhost'), options)
  const channel = await connection.createChannel()

  callback(channel)
}
