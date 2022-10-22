import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Home from "./pages/Home";
import Raffle from "./pages/Raffle";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorteio" element={<Raffle />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
