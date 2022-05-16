import React from 'react'
import { GlobalStyle } from '../../styles'
import { Loader, Loading } from './styles'

export const LoadingScreen = () => {
  return (
    <Loading>
      <GlobalStyle />
      <Loader />
      <p>Buscando</p>
    </Loading>
  )
}
