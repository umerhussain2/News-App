import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Busniess from "./pages/Busniess";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="busniess" element={<Busniess />} />
            <Route path="entertainment" element={<Entertainment />} />
            <Route path="health" element={<Health />} />
            <Route path="science" element={<Science />} />
            <Route path="sports" element={<Sports />} />
            <Route path="technology" element={<Technology />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
