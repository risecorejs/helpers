module.exports = {
  connectToRabbitMQ: require('./lib/connect-to-rabbitmq'),
  env: require('./lib/env'),
  getIncludeAliasesByOrderPrefixes: require('./lib/get-include-aliases-by-order-prefixes'),
  getModels: require('./lib/get-models'),
  pluralize: require('./lib/pluralize'),
  rediser: require('./lib/rediser'),
  setGlobalStructs: require('./lib/set-global-structs'),
  uploader: require('./lib/uploader')
}