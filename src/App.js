import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Kyc from "./components/Kyc";
import Transaction from "./components/Transaction";
import Notification from "./components/Notification";
import UserMange from "./components/UserManage";
import Payment from "./components/Payment";
import Reports from "./components/Reports";
import Security from "./components/Security";
import Support from "./components/Support";
import PrivateRoutes from "./utiils/PrivateRoutes";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Invoice from "./components/Invoice";
import Payouts from "./components/Payouts";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/user-management" element={<UserMange />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/security" element={<Security />} />
          <Route path="/support" element={<Support />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/payout" element={<Payouts />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
