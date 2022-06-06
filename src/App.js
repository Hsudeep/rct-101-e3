import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./components/Products/Products"
import Navbar from "./components/Navbar/Navbar";
import RequiredAuth from "./hoc/RequiredAuth";
function App() {
  return (
    <div >
      
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/products" element={<RequiredAuth>
            <Products></Products>
          </RequiredAuth>
        }></Route>
        </Routes>
      
    </div>
  );
}

export default App;
