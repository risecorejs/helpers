/**
 * GET-INCLUDE-ALIASES-BY-ORDER-PREFIXES
 * @param queryOrder {[string] | undefined}
 * @param orderPrefixesWithIncludeAliases: {object}
 * @return {string[]}
 */
export default function (queryOrder: [string] | undefined, orderPrefixesWithIncludeAliases: object): string[] {
  const includeAliases: string[] = []

  if (queryOrder) {
    for (const [orderPrefix, includeAlias] of Object.entries(orderPrefixesWithIncludeAliases)) {
      if (queryOrder[0].startsWith(orderPrefix)) {
        includeAliases.push(includeAlias)
      }
    }
  }

  return includeAliases
}
