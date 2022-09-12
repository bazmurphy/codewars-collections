import React from "react";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-sub-container-one">
                <a className="baz-image-link" href="https://github.com/bazmurphy/codewars-collections" target="_blank" rel="noreferrer">
                    <img className="baz-image" src="bazavatar.png" alt="baz logo" />
                </a>
            </div>
            <div className="header-sub-container-two">
                <img className="header-image" src="codewars.png" alt="codewars logo"/>
                <a className="header-title-link" href="https://www.codewars.com/users/CodeYourFuture/authored_collections" target="_blank" rel="noreferrer">
                    <h1 className="header-title">CYF CodeWars Collections</h1>
                </a>
            </div>
        </div>
    )
}

export default Header;