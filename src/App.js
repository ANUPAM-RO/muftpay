import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";
import Kyc from "./components/Kyc";
import Transaction from "./components/Transaction";
import Notification from "./components/Notification";
import UserMange from "./components/UserManage";
// import Payment from "./components/Payment";
// import Reports from "./components/Reports";
// import Security from "./components/Security";
// import Support from "./components/Support";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/user-management" element={<UserMange />} />
          <Route path="/notifications" element={<Notification />} />
          {/* <Route path="/payment" element={<Payment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/security" element={<Security />} />
          <Route path="/support" element={<Support />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
