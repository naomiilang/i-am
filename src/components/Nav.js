import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header>
            <h2 class="header">
                <Link to="/">Naomi Lang</Link>
            </h2>
            <nav class="nav">
                <ul className="flex-row">
                    <li className = "mx-2">
                    <Link to="/about">About</Link>
                    </li>
                    <li className = "mx-2">
                    <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className = "mx-2">
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

// function Nav(props) {
//     const tabs = ['About', 'Portfolio', 'Contact'];
//     return (
//         <header>
//             <h2>
//                 <a href="/">
//                     Naomi Lang
//                 </a>
//             </h2>
//             <ul className="flex-row">
//                 {tabs.map(tab => (
//                     <li className="mx-2" key={tab}>
//                         <a
//                             href={'#' + tab.toLowerCase()}
//                             onClick={() => props.handlePageChange(tab)}
//                             className={
//                                 props.currentPage === tab ? 'nav-link active' : 'nav-link'
//                             }
//                         >
//                             {tab}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </header>
//     );
// }

export default Nav;