import React from "react";

import './MainHeader.css'

const MainHearder = props => {
    return <header className="main-header">
        {props.children}
    </header>;
}
 
export default MainHearder;