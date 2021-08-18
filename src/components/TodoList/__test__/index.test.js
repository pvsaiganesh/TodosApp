//import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from '../index'
//import { isTSAnyKeyword } from 'babel-types'

it('renders without crashing', () => {
    const div = document.create('div')
    ReactDOM.render(TodoList, div)
})