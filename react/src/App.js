import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import CarInfo from "./pages/CarInfo";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Contact/>} path="/contact" />
        <Route path="/car/:id" element={<CarInfo/>}/>
        <Route element={<p>404 Not Found</p>} path="*"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
