import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import { Provider } from 'react-redux'

import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import "./_base.scss"
import store from "./redux/store"

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.querySelector("#root"))