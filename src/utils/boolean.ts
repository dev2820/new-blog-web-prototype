type nil = undefined | null;

/**
 * check value is null or undefined
 * @param value
 * @returns boolean
 */
export const isNil = (value: any): value is nil => {
  return isNull(value) || isUndefined(value);
};
/**
 * check value is null
 * @param value
 * @returns boolean
 */
export const isNull = (value: any): value is null => {
  return value === null;
};
/**
 * check value is undefined
 * @param value
 * @returns boolean
 */
export const isUndefined = (value: any): value is undefined => {
  return value === undefined;
};
