/**
  fetch data from a url, then return
  that promise for it to be picked up
  in a useEffect
*/

function trimAndLower(text: string | null | undefined) {
  typeof text === 'string'
    ? text.trim().toLowerCase()
    : text
}

export async function fetchData(
  url: string
): Promise<any[]> {
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
  } catch (err: unknown) {
    if (err instanceof Error) {
      if (err.name === 'AbortError') return
    }
    throw new Error('Failed to fetch!')
  } finally {
    controller?.abort()
  }
}
