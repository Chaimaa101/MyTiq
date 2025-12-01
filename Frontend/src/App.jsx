import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import DetailsEvent from "./pages/DetailsEvent"

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/details/:type/:id" element={<DetailsEvent />}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
