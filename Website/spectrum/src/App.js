import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LoginPage1 from './login.jsx';
// import LoginPage2 from './signup.jsx';
import Home from './Home.js';

//Spring imports
import Spring from './spring/Spring.js';
import FlowerMatch from './spring/Flower-Match/Flower-Match.js';
import Pathway from './spring/Pathway-Game/pathway.js';
import BeeGame from './spring/Bee-Game/BeeGame.js';
import SpringEnd from './spring/SpringEnd.js';

//Summer imports
import Summer from './summer/Summer.js';

export default function page(){
    return (
        // <div>
        //     {/* <LoginPage1/> */}
        //     {/* <LoginPage2/> */}
        // </div>
        <Router>
            <Routes>
                <Route path = "/" element = {<Home/>}/>

                {/* Spring Routes */}
                <Route path = "/spring" element = {<Spring/>}/>
                <Route path = "/flower" element = {<FlowerMatch/>}/>
                <Route path = "/pathway" element = {<Pathway/>}/>
                <Route path = "/bee" element = {<BeeGame/>}/>
                <Route path = "/springend" element = {<SpringEnd/>}/>

                {/* Summer Routes */}
                <Route path = "/summer" element = {<Summer/>}/>
            </Routes>
        </Router>
    );
}