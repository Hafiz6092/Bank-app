import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Debit from "./Debit";
import Credit from "./Credit";

function Home(){
    return(
        <div>
            <h2>Home</h2>
            <h3>This is the Home Page</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/Home/Debit">Debit</Link>
                    </li>
                    <li>
                        <Link to="/Home/Credit">Credit</Link>
                    </li>

                </ul>
            </nav>
            <Routes>
                <Route path="/Debit" element={<Debit/>} />
                <Route path="/Credit" element={<Credit/>} />

            </Routes>
        </div>
    )
}

export default Home;