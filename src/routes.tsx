import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import SiteWizard from "./components/SiteWizard/SiteWizard";
import Logout from "./components/Auth/Logout";
import Home from "./components/Home";
import Layout from "./components/Layout";

interface AppRoutesProps {
    user: any;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ user }) => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
                    <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />
                    <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
                    <Route path="/site-wizard" element={user ? <SiteWizard /> : <Navigate to="/login" />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRoutes;
