import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import RSVP from "./pages/RSVP";


const App = () => (
  <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/rsvp" element={<RSVP/>} />
        </Routes>
  </BrowserRouter>
);

export default App;
