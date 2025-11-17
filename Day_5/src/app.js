import ReactDom from 'react-dom/client';
import HeaderBar from './Header';
import Body from './Body';
import Footer from './Footer';

const AppLayout = () => {
    return (
        <>
            <HeaderBar />
            <Body />
            <Footer />
        </>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
