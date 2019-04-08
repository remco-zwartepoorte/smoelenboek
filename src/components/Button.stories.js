import React from 'react'
import {storiesOf} from '@storybook/react'
import {actions} from '@storybook/addon-actions'
import {withInfo} from '@storybook/addon-info'
import Button, {
  ButtonPrimary,
  ButtonOutline,
  ButtonMinimal,
  ButtonDanger,
} from '../components/Button'

const eventsFromObject = actions({onClick: 'clicked', onMouseOver: 'hovered'})

storiesOf('Components|Button', module)
  .addDecorator(withInfo)
  .add('Default', () => (
    <>
      <Button {...eventsFromObject}>Default</Button>
      <Button disabled>Disabled</Button>
    </>
  ))
  .add('Primary', () => (
    <>
      <ButtonPrimary {...eventsFromObject}>Primary</ButtonPrimary>
      <ButtonPrimary disabled>Disabled</ButtonPrimary>
    </>
  ))
  .add('Outline', () => (
    <>
      <ButtonOutline {...eventsFromObject}>Outline</ButtonOutline>
      <ButtonOutline disabled>Disabled</ButtonOutline>
    </>
  ))
  .add('Minimal', () => (
    <>
      <ButtonMinimal {...eventsFromObject}>Minimal</ButtonMinimal>
      <ButtonMinimal disabled>Disabled</ButtonMinimal>
    </>
  ))
  .add('Danger', () => (
    <>
      <ButtonDanger {...eventsFromObject}>Danger</ButtonDanger>
      <ButtonDanger disabled>Disabled</ButtonDanger>
    </>
  ))
