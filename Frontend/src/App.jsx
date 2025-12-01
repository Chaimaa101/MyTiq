import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import EventForm from "./pages/EventForm"

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/addEvent" element={<EventForm />}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
