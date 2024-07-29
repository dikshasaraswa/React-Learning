    import React from "react";
    import ReactDOM from "react-dom/client";
    import Header from "./components/Header"// default import 
    import Body from "./components/Body";
    import Footer from "./components/Footer";
    import { IMG_CDN_URL } from "./constants";

const AppLayout =()=>{
       return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
       );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 