import create, {SetState} from 'zustand'
import {API} from 'src/constants/api'

type State = {
  key: string
  value: string
}

type Actions = {
  updateEndpoint: (key: string, value: string) => void
}

type Store = State & Actions

export const createActions = (set: SetState<Store>) =>
  ({
    updateEndpoint: (key, value) =>
      set(() => ({
        key,
        value,
      })),
  } as Actions)

const initialState: State = {
  key: '',
  value: '',
}

export const useStore = create<Store>((set) => ({
  ...initialState,
  ...createActions(set),
}))
