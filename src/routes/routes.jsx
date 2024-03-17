import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import TeachersDashboard from "../layouts/TeachersDashboard";
import ParentsDashboard from "../layouts/ParentsDashboard";
import Homepage from "../pages/Homepage";
import Classes from "../pages/Classes";
import Attendance from "../pages/Attendance";
import Parents from "../pages/Parents";
import KidsList from "../pages/KidsList";
import Profile from "../pages/Profile";
import Mykids from "../pages/Mykids";
import Discipline from "../pages/Discipline";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/" element={<Homepage />} >
            </Route>
            <Route path="/teachers" element={<TeachersDashboard />} >
                <Route path="classes" element={<Classes />} />
                <Route path="attendance" element={<Attendance />} />
                <Route path="parents" element={<Parents />} />
                <Route path="kidslist" element={<KidsList />} />
                <Route path="discipline" element={<Discipline />} />
                <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/parents" element={<ParentsDashboard />} >
                <Route path="mykids" element={<Mykids />} />
                <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
        </Route>
    )
)