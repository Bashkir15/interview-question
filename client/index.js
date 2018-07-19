import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './state/createStore'
import App from './components/App'
import './styles/index.css'

const root = document.getElementById('root')
const store = createStore()

function renderApp(App) {
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		root
	)
}

renderApp(App)

if (module.hot) {
	module.hot.accept('./components/App.js', () => {
		const app = require('./components/App.js').default
		renderApp(app)
	})
}
