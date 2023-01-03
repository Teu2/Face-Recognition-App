import React from 'react';
import './Navigation.css';
import Tilt from 'react-parallax-tilt';

const Navigation = () => {
    return(
        <div id='navigation_parent_div'>
            <section id='top_nav'>
                <p>Let's see who we can find! 🔍</p>
            </section>
            <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Tilt>
                    <div>
                        <h1 id='logo'>RECOGNAI.</h1>
                    </div>
                </Tilt>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p id="signin_Button">Sign In</p>
                    <p id="signout_Button">Sign Out</p>
                </div>
            </nav>
        </div>
        
    );
}

export default Navigation;