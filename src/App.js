import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Information from "./components/Information/Information";
import Project from "./components/Project/Project";
import Message from "./components/Message/Message";
import MoreProject from "./components/MoreProject";

// Layout Component for Home Page
const Layout = () => (
  <div>
    <Information />
    <Project />
    <Message />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/more/projects" element={<MoreProject />} />
      </Routes>
    </Router>
  );
}

export default App;
