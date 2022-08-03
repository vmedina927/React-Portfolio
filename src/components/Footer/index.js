import React from 'react';

function Footer() {
    return (
        <div className="page-footer" id ="footer">
            <center>
                <a target="_blank" href="https://github.com/vmedina927">
                    <img src="https://img.icons8.com/sf-black-filled/344/github.png"
                    alt="github-logo"
                    class="icon"
                    />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/vmedina927/">
                    <img src="https://img.icons8.com/ios/344/linkedin-circled--v1.png"
                    alt="linkedin-logo"
                    class="icon"
                    />
                    </a>
                    <a target="_blank" href="https://stackoverflow.com/users/18049556/vickiana">
                    <img src="https://cdn.iconscout.com/icon/free/png-128/stack-overflow-3771544-3149964.png"
                    alt="stackoverflow-logo"
                    class="icon"
                    />
                </a>
            </center>
        </div>
    )
}

export default Footer;