//import newsaReducer from './news/reducer'
import { combineReducers, createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  news: /*cameraReducer*/ Object
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)