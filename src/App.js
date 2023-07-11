import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="result" element={<Result />} />
        <Route path="explain" element={<Explain />} />
      </Routes>
    </Router>
  );
}

export default App;
