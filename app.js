    import React from "react";
    import ReactDOM,{createRoot} from "react-dom/client";
    
    //functional components
    const Title = () => (    
        <a href="/">
        <img  
        className="logo" 
        src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj"
         alt="logo"></img>
        </a>
    );

    // Composing Components 
    const Header = () => { 
        return (
        <div className="header">
            <Title/>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
};

const RestrauntCard =() => {
  return(
    <div className="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTca851ts8F_LKj31pjz7TJ8XwhGWhi_uiq6A&s"></img>
    <h2>Burger King</h2>
    <h3>Burgers, American</h3>
    <h4>4.2 Stars</h4>
    </div>
  );
};

const Body = () => {
    return(
       <div>
        <RestrauntCard/>
       </div>
    )
}
const Footer = () => {
    return(
        <h4>Footer</h4>
    )
}

    const AppLayout =()=>{
       return(
        <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
       );
        };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>); 