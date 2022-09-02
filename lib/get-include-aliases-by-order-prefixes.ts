import { IFields } from '../interfaces'

/**
 * GET-INCLUDE-ALIASES-BY-ORDER-PREFIXES
 * @param queryOrder {[string, 'ASC' | 'DESC'] | undefined}
 * @param orderPrefixesWithIncludeAliases: {IFields}
 * @return {string[]}
 */
export default function (
  queryOrder: [string, 'ASC' | 'DESC'] | undefined,
  orderPrefixesWithIncludeAliases: IFields
): string[] {
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
