import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Example from "./pages/Example";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<RootLayout />}>
        
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="example" element={<Example />} />
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
