export const filterDataByInput = (
  array: any[],
  key: string,
  value: string
) => array.filter((item) => item[key] === value)
