import React from "react";
import logo from './logo-bnc-20.jpg';

const footerStyle = {
    backgroundColor: '#F8F8F8',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '100px',
    width: '100%'
};

const phantom = {
    display: 'block',
        padding: '20px',
        height: '60px',
        width: "100%"
};

export default function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={footerStyle}>
                <img src={logo} alt="blanche-net" />
                <h1>My footer</h1>
            </div>
        </div>
    );
}
