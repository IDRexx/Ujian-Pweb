import { Outlet } from 'react-router-dom';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import NavbarComponent from '../components/UI/NavbarComponent';

const RootLayout = () => {
    return (
        <>
            <NavbarComponent />
            <Header />
            <main className="container max-w-5xl mt-33 mx-auto px-2">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;