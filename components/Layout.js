import Navbar from './Navbar';
import Meta from './Meta';

const Layout = ({ children }) => {
    return(
        <>
        <Meta />
        <Navbar />
        <main>
            {children}
        </main>
        </>
    );
};

export default Layout;