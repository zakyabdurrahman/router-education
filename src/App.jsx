import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  //injection
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
