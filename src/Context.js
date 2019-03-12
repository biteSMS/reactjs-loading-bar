import React, { useState } from 'react'

const DEFAULT_STATES = {show: true}

export const LoadingBarContext = React.createContext(DEFAULT_STATES)

export const LoadingBarProvider = (props) => {
  const [show, setShow] = useState(true)
  
  const onProgressDone = () => {
    console.log('done!')
  }

  return (
    <LoadingBarContext.Provider
      value={{
        onProgressDone
      }}
    >
    {props.children}
    </LoadingBarContext.Provider>
  )
}