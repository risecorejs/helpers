import amqplib from 'amqplib';
/**
 * CONNECT-TO-AMQP
 * @param callback {(channel: amqplib.Channel) => any}
 * @param options {amqplib.Options.Connect}
 * @return {Promise<void>}
 */
export default function (callback: (channel: amqplib.Channel) => any, options?: amqplib.Options.Connect): Promise<void>;
