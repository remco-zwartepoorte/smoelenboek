import React from 'react'
import ReactDOM from 'react-dom'
import Button, {ButtonPrimary, ButtonOutline, ButtonMinimal} from './Button'
import theme from './theme'

it('renders button', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button theme={theme} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
