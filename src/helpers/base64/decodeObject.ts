/**
 * Decode a {string} into an {object}
 *
 * @param str - The {string} to decode
 *
 * @returns The encoded {string}'s decoded {object}
 */
export const decodeObject = <T>(str: string): T =>
  JSON.parse(Buffer.from(str, "base64").toString("utf-8"));
