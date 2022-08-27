import connectToAMQP from './lib/connect-to-amqp'
import env from './lib/env'
import getIncludeAliasesByOrderPrefixes from './lib/get-include-aliases-by-order-prefixes'
import getModels from './lib/get-models'
import pluralize from './lib/pluralize'
import setGlobalStructs from './lib/set-global-structs'

export default {
  connectToAMQP,
  env,
  getIncludeAliasesByOrderPrefixes,
  getModels,
  pluralize,
  setGlobalStructs
}
