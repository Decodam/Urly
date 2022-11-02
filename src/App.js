import React, {  } from 'react';
import HomeScreen from './app/screens/HomeScreen';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import RedirectScreen from './app/screens/RedirectScreen';
import ErrorPage from './app/screens/ErrorPage';

const App = (props) => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomeScreen />,
          errorElement: <ErrorPage />,
        },
        {
            path: "redirect/:docId",
            element: <RedirectScreen />,
        },
    ]);

    return(
        <>
            <RouterProvider router={router} />
        </>
    );
}


export default App;