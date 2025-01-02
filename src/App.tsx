import './App.css'
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home/>}/>
    </Routes>
  )
}

export default App
