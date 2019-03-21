import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { LoadingBar, LoadingBarContext } from '../../src'
import { useInterval } from './useInterval'

const App = () => {
  return (
    <LoadingBar>
      <Child></Child>
    </LoadingBar>
  )
}

const Child = (props) => {
  const { progress, setProgress } = useContext(LoadingBarContext)
  const [isRunning, setIsRunning] = useState(true)
  useInterval(() => {
    setProgress(progress + 3)
    if (progress >= 80) setIsRunning(false)
  }, isRunning ? 200 : null)
  // setProgress(100)

  return (<div>child</div>)
}

ReactDOM.render(<App />, document.getElementById("root"))