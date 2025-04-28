import { Route, Routes } from "react-router-dom"

import Landingpage from "../pages/Landingpage"
import Get from "../pages/Get"


function App() {


  return (
    <>
      <Routes> 
        <Route path="/" element={<Landingpage />} />
        <Route path="/Get" element={<Get />} />
      </Routes>
    </>
  )
}

export default App
