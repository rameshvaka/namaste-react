import React from "react";
import ReactDOM from "react-dom/client";

//React Function
const Title = () => (<
h1 className="heading" tabIndex="5"> Namaste heading JSX</h1>);

const title1 = (<
    h1 className="heading" tabIndex="5"> React Element Namaste heading JSX</h1>);

//Component composition
const HeadingComponent = () => (
    <div id="container">
    {title1}
    {Title()}
    <Title/>
    <Title></Title>
       <h1 className="heading">Namaste React Functional Componet</h1>
    </div>

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
