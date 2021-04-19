import certificatesReducer from './certificates/reducer'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  certificates: certificatesReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)