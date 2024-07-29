 //functional components
 const Title = () => (    // another way to export(exporting by name )
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

export default Header;// one way of exporting by default