import React, {Component} from 'react'
import Portal from './Portal'
import styled from 'styled-components'
import {FiAlertTriangle} from 'react-icons/fi'

import {SecondaryButton, DeleteButton} from './Button'
import {colors} from '../utils/styles'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1000;
`

const ModalCard = styled.div`
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  /* border-radius: 5px; */
  box-shadow: 0 15px 35px hsla(0, 0%, 0%, 0.2);
  max-width: 400px;
  min-width: 320px;
  padding: 1.2rem 1rem;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-top: 5px solid ${colors.danger};
  animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes blowUpModal {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`

const ModalText = styled.p`
  padding: 10px 20px;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: #fff;
  z-index: 10;
  background-color: #ff4b4b;
  border-radius: 100%;
  width: 3rem;
  height: 3rem;

  svg {
    height: 24px;
    width: 24px;
  }
`

export default class Modal extends Component {
  targetElement = null

  componentDidMount() {
    this.targetElement = document.querySelector('#root')
  }

  render() {
    const {toggleModal, modalText, primaryAction} = this.props
    // const CustomTag = <h1>`${icon}`</h1>
    return (
      <Portal>
        <ModalWrapper>
          <ModalCard>
            <Icon>
              <FiAlertTriangle />
            </Icon>
            <ModalText>{modalText}</ModalText>
            <div>
              <DeleteButton onClick={primaryAction}>Delete</DeleteButton>
              <SecondaryButton onClick={toggleModal}>Cancel</SecondaryButton>
            </div>
          </ModalCard>
          <Background onClick={toggleModal} />
        </ModalWrapper>
      </Portal>
    )
  }
}
