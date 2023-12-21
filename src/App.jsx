import BasicDemo from "./components/BasicDemo/BasicDemo"
import DebounceDemo from "./components/DebounceDemo/DebounceDemo"
import ThrottleDemo from "./components/ThrottleDemo/ThrottleDemo"

function App() {
 

  return (
    <>
    <p>Note: Check browser console while typing in the search bar.</p>
    <h2>Basic demo of making API calls on every key press: </h2>
    <BasicDemo/>

    <h2>Reducing number of API calls using Debounce: </h2>
    <DebounceDemo/>

    <h2>Reducing number of API calls using Throttle: </h2>
    <ThrottleDemo/>
    </>
  )
}

export default App
