import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import { LoadingBar, LoadingBarContext } from '../../src'

const App = () => {
  return (
    <LoadingBar>
      <Child></Child>
    </LoadingBar>
  )
}

const Child = () => {
  const {onProgressDone} = useContext(LoadingBarContext)
  onProgressDone()
  return (<div>child</div>)
}

ReactDOM.render(<App />, document.getElementById("root"))