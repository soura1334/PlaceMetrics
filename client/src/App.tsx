import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import { ThemeProvider } from "./components/ThemeProvider";
import Register from "./pages/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminOverview from "./pages/admin/AdminOverview";
import PlacementAnalytics from "./pages/admin/PlacementAnalytics";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<AdminOverview />} />
            <Route path="analytics" element={<PlacementAnalytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
