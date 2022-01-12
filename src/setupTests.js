import 'whatwg-fetch'
import '@testing-library/jest-dom'
import '@vanilla-extract/css/disableRuntimeStyles'
import {server} from 'test/__mocks__/server'

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
)
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
// server.printHandlers()
