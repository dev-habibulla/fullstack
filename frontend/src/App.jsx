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
import Category from "./pages/Category";
import SubCategory from "./pages/SubCategory";
import ViewCategory from "./pages/ViewCategory";
import ViewSubCategory from './pages/ViewSubCategory';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="/otpvarification/:email" element={<OtpVarification />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgetPassword />}></Route>
      <Route path="/changepass/:token" element={<ChangePassword />} />
      <Route path="/dashboard" element={<Home />} />

      <Route path="/dashboard" element={<Home />}>
        <Route path="createcat" element={<Category />}></Route>
        <Route path="createsubcat" element={<SubCategory />}></Route>
        <Route path="viewcat" element={<ViewCategory />}></Route>
        <Route path="viewsubcat" element={<ViewSubCategory />}></Route>
      </Route>
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
