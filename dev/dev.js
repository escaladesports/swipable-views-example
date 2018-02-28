import React from 'react'
import { render } from 'react-dom'
import Test from '../src'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

render(
	<Test />,
	containerEl
)