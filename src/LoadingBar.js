import React, { useEffect, useContext, useRef } from 'react'
import ReactDOM from 'react-dom'
import { LoadingBarProvider, LoadingBarContext } from './Context'
import './index.css'


export const LoadingBar = (props) => {
  
  return (
    <LoadingBarProvider>
      <Portal>
        <ProgressBar />
      </Portal>
      {props.children}
    </LoadingBarProvider>
  )
}

const Portal = (props) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }
  const el = elRef.current
  
  useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  }, [])

  return ReactDOM.createPortal(
    props.children,
    el
  )
}

const ProgressBar = () => {
  const { progress } = useContext(LoadingBarContext)

  return (
    <div
      className="reactjs-loading-bar"
      style={{
        width: progress + "%"
      }}
    >
    </div>
  )
}