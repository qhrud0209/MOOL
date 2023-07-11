import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Camera from "./routes/Result/Camera";
import Result from "./routes/Result/Result";
import Explain from "./routes/Explain/Explain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/result" element={<Result />} />
        <Route path="/explain" element={<Explain />} />
      </Routes>
    </Router>
  );
}

export default App;
