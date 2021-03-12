import React from 'react';

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    Naomi Lang
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className = "mx-2">
                        <a href = "#about">
                            about me
                        </a>
                    </li>
                    <li className = "mx-2">
                        <a href = "#portfolio">
                            portfolio
                        </a>
                    </li>
                    <li className = "mx-2">
                        <a href = "#contact">
                            contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;