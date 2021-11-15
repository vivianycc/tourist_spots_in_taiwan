import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Search from "./components/Search";
import ExplorePage from "./components/ExplorePage";
import CityPage from "./components/CityPage";
import SpotPage from "./components/SpotPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/spot/:id" element={<SpotPage />} />
          <Route path="/city/:id" element={<CityPage />} />
          <Route path="/" element={<ExplorePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
