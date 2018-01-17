import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { ui } from './ui'
import { home } from './home'
import { properties } from '../components/properties/reducer'

export default combineReducers({
    router,
    ui,
    home,
    properties
})
