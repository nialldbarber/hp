export const slugify = (
  input: string,
  unslugify: boolean = false
): string =>
  unslugify
    ? input.replace(/-/g, ' ')
    : input.replace(/\s/g, '-')
