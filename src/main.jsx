import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global.css';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/user.jsx';
import BookPage from './pages/book.jsx';
import TodoApp from './components/todo/TodoApp.jsx';
import ErrorPage from './pages/error.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <TodoApp />,
            },
            {
                path: '/users',
                element: <UserPage />,
            },
            {
                path: '/books',
                element: <BookPage />,
            },
        ],
        errorElement: <ErrorPage />,
    },

    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <RouterProvider router={router} />,
    // </React.StrictMode>,
);
