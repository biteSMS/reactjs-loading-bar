import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { LoadingBar, LoadingBarContext } from '../../src'

const App = () => {
  return (
    <LoadingBar>
      <Child></Child>
    </LoadingBar>
  )
}

const Child = (props) => {
  const { progress, setProgress } = useContext(LoadingBarContext)

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress(progress => progress + 3)
    }, 200)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (<div>child</div>)
}

ReactDOM.render(<App />, document.getElementById("root"))