import React from 'react';
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header=()=>{
    return(
        <div className="ui secondary pointing menu">
            <Link className="item" to="/">
                Home
            </Link>
            <div className="right menu">
                <Link className="item" to="/">
                    Search
                </Link>
            </div>
            <GoogleAuth/>
        </div>
    );
};

export default Header;