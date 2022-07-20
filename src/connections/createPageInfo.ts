/**
 * Create the {PageInfo}
 *
 * @param edges - The {Edge}s
 * @param hasNextPage - Whether the {Connection} has a next page
 * @param hasPreviousPage - Whether the {Connection} has a previous page
 *
 * @returns The created {PageInfo}
 */
export const createPageInfo = <T extends { id: string }>(
  edges: { cursor: string; node: T }[],
  hasNextPage: boolean,
  hasPreviousPage: boolean
) => {
  // Get the start {Cursor}
  const startCursor = edges.length > 0 ? edges[0].cursor : "";

  // Get the end {Cursor}
  const endCursor = edges.length > 0 ? edges[edges.length - 1].cursor : "";

  // Create the {PageInfo}
  return { hasNextPage, hasPreviousPage, startCursor, endCursor };
};
