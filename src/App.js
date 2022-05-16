import "./App.css";
import { Outlet } from 'react-router'

const App = () => {
  return (
  <div className="App">
    <Outlet />
  </div>
  )
}

export default App;
