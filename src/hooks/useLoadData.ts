import {useEffect, useState} from 'react'
import {fetchData} from 'src/utils/fetchData'

export function useLoadData(api: string) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        let response = await fetchData(api)
        setData(response)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return {data, loading, error}
}
