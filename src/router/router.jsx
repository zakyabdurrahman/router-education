import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import InsurancePage from "../views/InsurancePage";
import RecruitmentPage from "../views/RecruitmentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  }, 
  {
    path: "/insurance",
    element: <InsurancePage/>
  },
  {
    path: "/recruitment",
    element: <RecruitmentPage/>
  }
])


export default router;