/**
  fetch data from a url, then return
  that promise for it to be picked up
  in a useEffect
 */

export async function fetchData(url: string): Promise<any> {
  let controller = new AbortController()
  try {
    let response = await fetch(url, {
      signal: controller.signal,
    })
    if (!response.ok) {
      throw new Error(
        `Request failed with status code ${response.status}`
      )
    }
    controller = null
    return response.json()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch!')
  } finally {
    controller?.abort()
  }
}
