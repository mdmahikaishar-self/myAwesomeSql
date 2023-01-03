/**
 * toTitle
 * --------------
 * make string titlecase based
 * @param value name
 * @returns titlecase name
 */
export function toTitle(value: string): string {
  return value[0].toUpperCase() + value.slice(1);
}

export default { toTitle };
