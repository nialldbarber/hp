/**
  takes an array, a key and a value
  based on that, return a new array
  with the matchin results
 */
export const filterDataByInput = (
  array: any[],
  key: string,
  value: string
) => array.filter((item) => item[key] === value)
