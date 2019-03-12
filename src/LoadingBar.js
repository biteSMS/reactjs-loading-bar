import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { LoadingBarProvider } from './Context'
import './index.scss'

export const LoadingBar = (props) => {
  
  return (
    <LoadingBarProvider>
      <Portal>
        <div>
          loading...
        </div>
      </Portal>
      {props.children}
    </LoadingBarProvider>
  )
}

const Portal = (props) => {
  const el = document.createElement('div')
  useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  },[])

  return ReactDOM.createPortal(
    props.children,
    el
  )
}