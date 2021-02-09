import React from 'react'
import Navbar from './Navbar'


const Header = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner__content">
                <div className="container">
                    <div className="banner__text">
                        <h3>Solusi Sablon</h3>
                        <h1>WIRO SABLON</h1>
                        <p>
                            Mollit adipisicing tempor cupidatat do ad et.
                            Cupidatat laborum sunt ut consectetur voluptate ad mollit aliquip.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
