import {keysToIgnore} from 'src/constants/tagNames'

/**
  takes a string
  replace underscore with a space
  _ -> " "
  separate by capital letter
  dateOfBirth -> date Of Birth
 */

export function formatTagNames(tag: string): string {
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

/**
  gather specific tag names and create
  a new array where each category name
  has the list of options
 */
export function gatherTagTitles(array: any[]): string[] {
  let tagNames: any = {}
  array.forEach((item: any) => {
    for (let key in item) {
      // is key in tagNames?
      if (key in tagNames) {
        // is value not in tagNames array?
        if (!tagNames[key].includes(item[key])) {
          // add value to tagNames array
          tagNames[key] = [...tagNames[key], item[key]]
        }
      } else {
        // ignore keys we don't want
        // to filter by
        if (!keysToIgnore.includes(key)) {
          // add tagNames key and value
          tagNames[key] = [item[key]]
        }
      }
    }
  })
  return tagNames
}

export const formatValueOutput = (
  value: string | boolean
): string =>
  typeof value === 'boolean' ? value.toString() : value
