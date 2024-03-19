// import { Page } from "./Components/Page/Page";

import Register from "./user/Register";
import Login from "./user/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QSheet } from "./Components/QSheet/QSheet";
import SiteInformationComponent from "./Components/AreaInfo/AreaInfo";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/dashboard",
  //   element: <Page />,
  // },
  {
    path: "/dashboard",
    element: <Layout />,
  },
]);

function App() {
  return (
    <main className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <Page /> */}
    </main>
  );
}

export default App;
