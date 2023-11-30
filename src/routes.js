import Dashboard from "./pages/dashboard/Dashboard";
import Tables from "./pages/tables/Tables";
import Notifications from "./pages/notifications/Notifications";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";

let routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/tables", element: <Tables /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/profile", element: <Profile /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
];

export default routes;
