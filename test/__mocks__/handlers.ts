import {rest} from 'msw'
import {dummyData} from 'test/__mocks__/dummyData'
import {API} from 'src/constants/api'

export let handlers = [
  rest.get(API, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyData))
  }),
]
