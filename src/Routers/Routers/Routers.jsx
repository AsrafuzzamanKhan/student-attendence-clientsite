import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddStudent from "../../Pages/Home/AddStudent/AddStudent";
import StudentUpdate from "../../Pages/Home/StudentList/StudentUpdate";
import Attendence from "../../Pages/Home/Attendence/Attendence/Attendence";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/attendence",
        element: <Attendence></Attendence>,
      },
      {
        path: "/addStudent",
        element: <AddStudent></AddStudent>
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
  // {
  //   path: "/addStudent",
  //   element: <AddStudent></AddStudent>,
  // },
  {
    path: "/updateStudent/:id",
    element: <StudentUpdate></StudentUpdate>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/studentList/${params.id}`),
  },
]);
