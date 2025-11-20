import AppLayout from "./layouts/AppLayout";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
