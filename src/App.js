import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import "./styles/partials/_global.scss";
import Home from "./pages/Home/Home"

// API bryce-borer-capstone
// key ID: WGUmFqSK
// secret key: WGUmFqSK.gcxjKP1cm9F4MaLTZUlntSeuQWpHWreI

const FOOD_URL = "https://vision.foodvisor.io/api/1.0/en/analysis/"
const headers = {"Authorization": "Api-Key <YOUR_API_KEY>"}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
