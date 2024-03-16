import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/" element={<AppLayout />} >
            </Route>
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
        </Route>
    )
)