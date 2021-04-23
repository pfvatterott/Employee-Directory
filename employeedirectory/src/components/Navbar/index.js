import React from "react";

function Navbar() {
    return (
        <header>
            <div class="navbar-fixed">
                <nav>
                    <div class="nav-wrapper">
                        <div class="container">
                            <a href="#" data-activates="mobile-menu" class="button-collapse"><i class="material-icons">Employee Directory</i></a>
                            <ul class="right hide-on-med-and-down">
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>  
        </header>
    );
}

export default Navbar;