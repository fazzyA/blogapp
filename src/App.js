import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./Component/Navbar";
import Home from "./Container/Home";
import Create from "./Container/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetail from "./Container/BlogDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path={`blog/:id`} element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
