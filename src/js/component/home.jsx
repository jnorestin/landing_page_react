import React from "react";
import Navbar from './navbar.js'
import Jumbotron from'./jumbotron.js'
import Card from "./card.js";

//create your first component
const Home = () => {
return (
<div className>
<Navbar/>
<Jumbotron/>
<div style={{ display: "flex"}}>
<Card/>
<Card/>
<Card/>
<Card/>
</div>



</div>
);
};

export default Home;