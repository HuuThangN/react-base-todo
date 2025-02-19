import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import Header from './components/layout/header';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
