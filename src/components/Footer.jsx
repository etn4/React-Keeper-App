import React from "react";

function Footer(){
    const copyright = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright ⓒ {copyright}</p>
        </footer>
    )
}

export default Footer;