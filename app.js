    
    //creating h1 tag using react 
    const heading1 = React.createElement("h1",{
        id:"title",
    },"HEADING 1");

    const heading2 = React.createElement("h2",{
        id:"title",
    },"HEADING 2");

    const container = React.createElement("div",{
        id:"container",
    },[heading1,heading2]); //these heading1 & heading2 are react element 

    const root = ReactDOM.createRoot(document.getElementById("root"));

   //console.log(heading); a react element is a object 

    root.render(container);//passing a react element inside root