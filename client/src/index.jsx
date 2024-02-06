// import React from "react";
// import * as ReactDOM from "react-dom/client";
// import Navbar from "./components/Navbar/index.jsx";
// import { BrowserRouter,Routes,Route } from "react-router-dom";




// const App = ()=>{
//     return (
//       //  <>
//       //     <Navbar/>
//       //     <h1>Hello</h1>
//       //     </>

//       <BrowserRouter>
//         <Routes>
//           <Route path="/client/dist/" element={<p>Home</p>} />
//           <Route path="/client/dist/autre" element={<p>Autre</p>} />
//         </Routes>
//       </BrowserRouter>
//     );
// }

// ReactDOM.createRoot(document.getElementById("app")).render(

//    <App/>

// );


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/client/dist/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/client/dist/profil",
    element: <div>Profil</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
