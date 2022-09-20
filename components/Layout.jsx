import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <div className="mx-auto max-w-screen-xl py-8 lg:py-16">
                <Navbar />
            </div>
            <main>{children}</main>
            <Footer />
        </>
    );
}
