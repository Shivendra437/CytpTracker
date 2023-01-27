import "./styles.css";
import "./Style/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Homepage from "./Component/Homepage";
import CoinPage from "./Component/CoinPage";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
