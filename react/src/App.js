import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import CarInfo from "./pages/CarInfo";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route element={<Landing/>} path="/" />
        <Route element={<p>Hello Contact</p>} path="/contact" />
        <Route path="/car/:id" element={<CarInfo/>}/>
        <Route element={<p>404 Not Found</p>} path="*"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
