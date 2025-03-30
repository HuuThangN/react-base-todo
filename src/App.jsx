import Header from './components/layout/header';
import './components/todo/todo.css';
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
