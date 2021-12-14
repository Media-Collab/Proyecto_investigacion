import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home/Home";
import Account from "./containers/Account/Account";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cuenta" element={<Account />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
