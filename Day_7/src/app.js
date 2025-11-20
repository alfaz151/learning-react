import ReactDom from 'react-dom/client';
import HeaderBar from './Header';
import Body from './Body';
import Footer from './Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import PostCard from './PostCard';
import PostCardWrapper from './PostCardWrapper';
import ErrorPage from './Error';

const AppLayout = () => {
    return (
        <>
            <HeaderBar />
            <Outlet />
            <Footer />
        </>
    );
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <h1>About Page</h1>,
            },
            {
                path: "/contact",
                element: <h1>Contact Page</h1>,
            },
            {
                path: "/post/:id",
                element: <PostCardWrapper/>
            }
        ]
    }
]);


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<><RouterProvider router={routes} /></>);
