import {rest} from 'msw'
import {fetchData} from 'src/utils/fetchData'
import {API} from 'src/constants/api'
import {dummyData} from 'test/__mocks__/dummyData'
import {server} from 'test/__mocks__/server'

describe('utils -> fetchData()', () => {
  it('fetches data successfully', async () => {
    let response = await fetchData(API)
    expect(response).toEqual(dummyData)
  })

  // it('handles failure to fetch', async () => {
  //   server.use(
  //     rest.get(API, (_, res, ctx) => {
  //       return res(ctx.status(500))
  //     })
  //   )
  //   await expect(
  //     fetchData(API + '/wrong-endpoint')
  //   ).rejects.toThrow('Network request failed')
  // })
})
