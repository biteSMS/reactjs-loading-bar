import React, { useState, useEffect, useRef } from 'react'

const DEFAULT_STATES = {}

export const LoadingBarContext = React.createContext(DEFAULT_STATES)

export const LoadingBarProvider = (props) => {
  const [progress, setProgress] = useState(0)
  
  return (
    <LoadingBarContext.Provider
      value={{
        progress,
        setProgress
      }}
    >
    {props.children}
    </LoadingBarContext.Provider>
  )
}