import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigationbar from "./components/Navigationbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigationbar>  </Navigationbar>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
