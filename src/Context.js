import React, { useState, useEffect } from 'react'

const DEFAULT_STATES = {}

export const LoadingBarContext = React.createContext(DEFAULT_STATES)

export const LoadingBarProvider = (props) => {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (progress && progress < 100 && progress >= 0) {
      setShow(true)
    } else {
      setShow(false)
    }
  },[progress])

  return (
    <LoadingBarContext.Provider
      value={{
        progress,
        setProgress,
        show
      }}
    >
    {props.children}
    </LoadingBarContext.Provider>
  )
}