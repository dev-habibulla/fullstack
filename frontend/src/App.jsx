import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import OtpVarification from "./pages/OtpVarification";
import { Login } from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="/otpvarification/:email" element={<OtpVarification />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgetPassword />}></Route>
      <Route path="/changepass/:token" element={<ChangePassword />} />
      <Route path="/home" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
