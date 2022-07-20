/**
 * Encodes an {object} into a {string}
 *
 * @param obj - The {object} to encode
 *
 * @returns The {object}'s encoded {string}
 */
export const encodeObject = <T extends {}>(obj: T): string =>
  Buffer.from(JSON.stringify(obj)).toString("base64");
