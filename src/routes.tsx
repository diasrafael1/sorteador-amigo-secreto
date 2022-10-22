import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import useListPeople from "state/hooks/useListPeople";
import Header from "./components/Header";
import Home from "./pages/Home";
import Raffle from "./pages/Raffle";

function ProtectedRoutes({ redirectTo }: { redirectTo: string }) {
  const listPeople = useListPeople();
  console.log(listPeople);
  return listPeople.length !== 0 ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes redirectTo={"/"} />}>
            <Route path="/sorteio" element={<Raffle />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
