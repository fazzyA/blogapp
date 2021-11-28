import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./Component/Navbar";
import Home from "./Container/Home";
import Create from "./Container/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
