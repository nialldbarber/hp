export const removeDuplicates = (array: any[]): any[] => [
  ...new Map(
    array.map((item) => [item.name, item])
  ).values(),
]
