import React from 'react'
import {configure, addDecorator} from '@storybook/react'
import {withThemesProvider} from 'storybook-addon-styled-component-theme'
import theme from '../src/components/theme'

addDecorator(withThemesProvider([theme]))

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
