import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="login" element={<Login />} />
          <Route path="2" element={<Dashboard />} />
        </Route>

        {/* <Route path="/s" element={<Dashboard />}>
          <Route path="3" element={<Component2 />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
