import { BrowserRouter, Route, Routes } from "react-router";
import { Page404 } from "../pages/404";
import { Home } from "../pages/home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
