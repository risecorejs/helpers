import amqplib from 'amqplib'

import env from './env'

/**
 * CONNECT-TO-AMQP
 * @param callback {(channel: amqplib.Channel) => any}
 * @param options {amqplib.Options.Connect}
 * @returns {Promise<void>}
 */
module.exports = async (callback: (channel: amqplib.Channel) => any, options?: amqplib.Options.Connect) => {
  const connection = await amqplib.connect(options || env('AMQP_URL', 'amqp://localhost'))
  const channel = await connection.createChannel()

  callback(channel)
}