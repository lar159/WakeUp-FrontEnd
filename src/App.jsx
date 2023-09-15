import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Orders from "./components/pages/Orders/Orders"
import Error404 from "./components/pages/Error404/Error404";
import Menu from "./components/pages/Menu/Menu";
import Dashboard from "./components/pages/AdminDashboard/Dashboard";

function App() {
  const isDashboardRoute = window.location.pathname.startsWith("/dashboard");

  return (
    <>
      <BrowserRouter>
        {isDashboardRoute ? null : <Navbar />}
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/product/orders" element={<Orders />} />
          <Route exact path="/*" element={<Error404 />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/dashboard/*" element={<Dashboard />} />
        </Routes>
        {isDashboardRoute ? <Outlet /> : <Footer />}
      </BrowserRouter>
    </>
  )
}

export default App;

