import "./Header.css";
import React from 'react';
import Logo from "../../images/trivago.png";

const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-center my-4">
                <img className="w-25" src={Logo} alt="Logo" />
            </div>
            <h3 className="text-center header-text">Choose 4 Places to Visit</h3>
        </div>
    );
};

export default Header;