import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import TeachersDashboard from "../layouts/TeachersDashboard";
import ParentsDashboard from "../layouts/ParentsDashboard";
import Homepage from "../pages/Homepage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/" element={<Homepage/>} >
            </Route>
            <Route path="/teachers" element={<TeachersDashboard />} >
            </Route>
            <Route path="/parents" element={<ParentsDashboard />} >
                <Route />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
        </Route>
    )
)