import {filterDataByInput} from 'src/utils/filterDataByInput'
import {
  dummyData,
  dummyDataForFilteredData,
  expectedDummyDataForFilteredData,
} from 'test/__mocks__/dummyData'

describe('utils -> filterDataByInput()', () => {
  it('should return an empty array if nothing matches', () => {
    expect(
      filterDataByInput(dummyData, 'name', 'gandalf')
    ).toEqual([])
  })

  it('should return werewolf characters when selected', () => {
    expect(
      filterDataByInput(
        dummyDataForFilteredData,
        'species',
        'werewolf'
      )
    ).toStrictEqual(expectedDummyDataForFilteredData)
  })
})
