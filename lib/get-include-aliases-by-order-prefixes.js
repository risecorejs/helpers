"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GET-INCLUDE-ALIASES-BY-ORDER-PREFIXES
 * @param queryOrder {[string, 'ASC' | 'DESC'] | undefined}
 * @param orderPrefixesWithIncludeAliases: {IFields}
 * @return {string[]}
 */
function default_1(queryOrder, orderPrefixesWithIncludeAliases) {
    const includeAliases = [];
    if (queryOrder) {
        for (const [orderPrefix, includeAlias] of Object.entries(orderPrefixesWithIncludeAliases)) {
            if (queryOrder[0].startsWith(orderPrefix)) {
                includeAliases.push(includeAlias);
            }
        }
    }
    return includeAliases;
}
exports.default = default_1;
