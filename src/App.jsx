import Chat from "./pages/Chat"
import Login from "./pages/Login"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from "./pages/Register"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Chat/>} path="/"></Route>
      <Route element={<Login/>} path="/login"></Route>
      <Route element={<Register/>} path="/register"></Route>
     
      </Routes>
    </BrowserRouter>
  )
}

export default App
