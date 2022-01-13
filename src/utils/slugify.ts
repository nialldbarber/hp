export const slugify = (input: string): string =>
  input.toLowerCase().replace(/\s/g, '-')
