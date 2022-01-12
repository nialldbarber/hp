import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import {rest} from 'msw'
import {API} from 'src/constants/api'
import {HomeScreen} from 'src/screens/Home'
import {server} from 'test/__mocks__/server'

describe('screens -> <Home />', () => {
  it('renders the loading message before data has been fetched', () => {
    render(<HomeScreen />)
    let loadingMessage = screen.getByText('Loading...')
    expect(loadingMessage).toBeInTheDocument()
  })

  it('should render the error message when an error occurs', async () => {
    server.use(
      rest.get(API, (_, res, ctx) => {
        return res(ctx.status(404))
      })
    )
    render(<HomeScreen />)
    await waitForElementToBeRemoved(() =>
      screen.getByText('Loading...')
    )
    const errorMessage = screen.getByText('Uh oh!')
    expect(errorMessage).toBeInTheDocument()
  })
})
