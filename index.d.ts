import connectToAMQP from './lib/connect-to-amqp';
import env from './lib/env';
import getIncludeAliasesByOrderPrefixes from './lib/get-include-aliases-by-order-prefixes';
import getModels from './lib/get-models';
import pluralize from './lib/pluralize';
import setGlobalStructs from './lib/set-global-structs';
declare const _default: {
    connectToAMQP: typeof connectToAMQP;
    env: typeof env;
    getIncludeAliasesByOrderPrefixes: typeof getIncludeAliasesByOrderPrefixes;
    getModels: typeof getModels;
    pluralize: typeof pluralize;
    setGlobalStructs: typeof setGlobalStructs;
};
export default _default;
