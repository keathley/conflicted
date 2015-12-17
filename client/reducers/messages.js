import { handleAction } from 'redux-actions'

const initialState = []

export const createMessage = (state, action) => {
  console.log(state);
  return state.concat([action.payload])
}

export default function messagesReducer(state=initialState, action) {
  switch(action.type) {
  case 'CREATE_MESSAGE':
    return createMessage(state, action)
  }
  return state
}
