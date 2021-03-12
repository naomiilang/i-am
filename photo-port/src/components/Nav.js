import React from 'react';

// function Nav() {
//     return (
//         <header>
//             <h2>
//                 <a href="/">
//                     Naomi Lang
//                 </a>
//             </h2>
//             <nav>
//                 <ul className="flex-row">
//                     <li className = "mx-2">
//                         <a href = "#about">
//                             about me
//                         </a>
//                     </li>
//                     <li className = "mx-2">
//                         <a href = "#portfolio">
//                             portfolio
//                         </a>
//                     </li>
//                     <li className = "mx-2">
//                         <a href = "#contact">
//                             contact
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact'];
    return (
        <header>
            <h2>
                <a href="/">
                    Naomi Lang
                </a>
            </h2>
            <ul className="flex-row">
                {tabs.map(tab => (
                    <li className="mx-2" key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Nav;