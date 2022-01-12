import {useEffect, useMemo, useState} from 'react'
import {fetchData} from 'src/utils/fetchData'
import {removeDuplicates} from 'src/utils/removeDuplicates'

export function useLoadData<T>(api: string) {
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
        setTagNames(Object.keys(response[0]))
        setData(response)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const uniqueCharacters = useMemo(
    // might be pointless but hey!
    () => removeDuplicates(data),
    [data]
  )

  return {data: uniqueCharacters, tagNames, loading, error}
}
