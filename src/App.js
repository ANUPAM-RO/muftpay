import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";
import Kyc from "./components/Kyc";
import Transaction from "./components/Transaction";
import Notification from "./components/Notification";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
