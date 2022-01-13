import {useEffect, useMemo, useState} from 'react'
import {fetchData} from 'src/utils/fetchData'
import {filterDataByInput} from 'src/utils/filterDataByInput'
import {gatherTagTitles} from 'src/utils/getTagNames'
import {removeDuplicates} from 'src/utils/removeDuplicates'

export function useLoadData<T>(
  api: string,
  key?: string,
  value?: string
) {
  const [data, setData] = useState<T[]>([])
  const [tagNames, setTagNames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        // get the initial response
        let response = await fetchData(api)
        // get tag names from the first item
        let tagTitles = gatherTagTitles(response)
        setTagNames(tagTitles)
        // if we want to filter data
        if (key && value) {
          let updatedData = filterDataByInput(
            response,
            key,
            value
          )
          console.log(updatedData)

          setData(updatedData)
        } else {
          setData(response)
        }
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    })()
  }, [key, value])

  const uniqueCharacters = useMemo(
    // might be pointless but hey!
    () => removeDuplicates(data),
    [data]
  )

  return {
    data: uniqueCharacters,
    tagNames,
    loading,
    error,
  }
}
