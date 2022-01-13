import {
  formatTagNames,
  gatherTagTitles,
  formatValueOutput,
} from 'src/utils/getTagNames'
import {
  dummyDataForTagNames,
  expectedDummyDataForTagNames,
} from 'test/__mocks__/dummyData'

describe('utils -> formatTagNames()', () => {
  it('should replace underscores with whitespace', () => {
    expect(formatTagNames('banana_hammock')).toBe(
      'banana hammock'
    )
  })

  it('should replace words starting with capital letter with a space', () => {
    expect(formatTagNames('dateOfBirth')).toBe(
      'date of birth'
    )
  })
})

describe('utils -> gatherTagTitles()', () => {
  it('should create a new array with the keys and unique values', () => {
    expect(
      gatherTagTitles(dummyDataForTagNames)
    ).toStrictEqual(expectedDummyDataForTagNames)
  })
})
