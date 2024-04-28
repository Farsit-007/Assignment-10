import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <>
             <div >
              <Header></Header>
            </div>
            <div >
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;