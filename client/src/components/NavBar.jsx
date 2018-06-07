import React from 'react';

let NavBar = ({user_email}) => (
    <div className="nav-bar">
        <p>
            <span className="videri-title">VIDERI</span> &nbsp;
            <span>CONTENT</span>
            <span className="user-email">{user_email}</span>
        </p>

    </div>
)

export default NavBar;