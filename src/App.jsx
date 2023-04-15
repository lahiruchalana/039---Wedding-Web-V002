import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"


const App = () => (
  <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route path="/quiz" element={<Quiz/>} /> */}
        </Routes>
  </BrowserRouter>
);

export default App;
