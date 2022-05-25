import Header from "./components/Header";
import logo from "./assets/logo.svg";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" 
            element={<Profile userName="Augusto-debug" />} />
          <Route
            path="/projects"
            element={<Projects userName="Augusto-debug" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
