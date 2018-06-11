import React from 'react';
import SampleProfile from '../assets/sampleprofile.jpg';

let NavBar = ({user_email}) => (
    <div className="nav-bar">
        <p>
            <span className="videri-title">VIDERI</span> &nbsp;
            <span>CONTENT</span>

            <span className="user-section">
                <span className="user-email">{user_email}</span>
                &nbsp;
                <img 
                    src={SampleProfile}
                    height="40px"
                    width="40px"
                    className="profile-picture"
                />
            </span>
        </p>

    </div>
)

export default NavBar;