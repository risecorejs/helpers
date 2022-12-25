import amqplib from 'amqplib';
/**
 * CONNECT-TO-AMQP
 * @param callback {(channel: amqplib.Channel) => any}
 * @param options {amqplib.Options.Connect?}
 */
export default function (callback: (channel: amqplib.Channel, connection?: amqplib.Connection) => any, options?: amqplib.Options.Connect): Promise<void>;
