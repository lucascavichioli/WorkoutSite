import React from "react";
import "../App";
import Menu from "./Menu";

function Header(props){
    return (
        <header className='header'>
          <a href="/"><h1>{props.name}</h1></a>
          <Menu links={props.links}></Menu>
        </header>
      )
}

export default Header;