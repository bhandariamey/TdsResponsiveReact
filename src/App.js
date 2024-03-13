
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Sites from './components/Sites/Sites'
import Contact from './components/Contact/Contact'
import Services from "./components/Service/Services"

import {Routes, Route, BrowserRouter} from "react-router-dom"

export default function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout/>}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="sites" element={<Sites />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}