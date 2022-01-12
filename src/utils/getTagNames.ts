/**
  takes a string
  replace underscore with a space 
  _ -> " "
  separate by capital letter 
  dateOfBirth -> date Of Birth
  capitalise the first letter of each word  
  date Of Birth -> Date Of Birth
 */

export const formatTagNames = (tag: string): string => {
  let output = []
  let formattedString = tag
  formattedString = formattedString.replace(/[_ )(]/g, ' ')
  let separateByCapital = formattedString.split('')

  for (let item of separateByCapital) {
    if (item === ' ') {
      output.push(item)
    } else if (item === item.toUpperCase()) {
      output.push(' ', item)
    } else {
      output.push(item)
    }
  }

  return output.join('').toLowerCase()
}
