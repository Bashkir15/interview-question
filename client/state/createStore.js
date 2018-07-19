import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk' // Default, feel free to use sagas, or redux-obversable

const createRootReducer = () => combineReducers({
	// Feel free to move this and structure how you like
	// This only exists here so the store won't error
	users: (state = {}, action) => state
})

const IS_DEV = process.env.NODE_ENV === 'development'
const composeEnhancers = (
	IS_DEV &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

export default function configureStore(preloadedState) {
	const rootReducer = createRootReducer()
	const rootEnhancers = composeEnhancers(applyMiddleware(
		thunk,
		createLogger({ collapsed: true })
	))

	const store = createStore(
		rootReducer,
		preloadedState,
		rootEnhancers
	)

	return store
}
