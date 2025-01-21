import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import ProgramDetails from "./CustomComponent/Classes/ProgramDetails";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs/:programId" element={<ProgramDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
