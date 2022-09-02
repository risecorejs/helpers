import { IFields } from '../interfaces';
/**
 * GET-INCLUDE-ALIASES-BY-ORDER-PREFIXES
 * @param queryOrder {[string, 'ASC' | 'DESC'] | undefined}
 * @param orderPrefixesWithIncludeAliases: {IFields}
 * @return {string[]}
 */
export default function (queryOrder: [string, 'ASC' | 'DESC'] | undefined, orderPrefixesWithIncludeAliases: IFields): string[];
