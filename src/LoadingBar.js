import React from 'react'
import { LoadingBarProvider } from './Context'
import './index.scss'

export const LoadingBar = (props) => {
  
  return (
    <LoadingBarProvider>
      <div>
        loading...
      </div>
      {props.children}
    </LoadingBarProvider>
  )
}