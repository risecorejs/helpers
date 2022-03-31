module.exports = (queryOrder, orderPrefixesWithIncludeAliases) => {
  const include = []

  for (const [orderPrefix, includeAlias] of Object.entries(orderPrefixesWithIncludeAliases)) {
    if (queryOrder && queryOrder[0].startsWith(orderPrefix)) {
      include.push(includeAlias)
    }
  }

  return include
}
