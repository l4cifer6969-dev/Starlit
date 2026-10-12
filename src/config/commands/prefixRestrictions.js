/**
 * Prefix commands are enabled alongside slash commands.
 * Kept as a helper module for callers that check prefix restrictions.
 */

export function getPrefixRestriction() {
  return { blocked: false };
}

export function isPrefixRestrictedCommand(command, args, resolveSubcommandAlias) {
  return getPrefixRestriction(command, args, resolveSubcommandAlias).blocked;
}
