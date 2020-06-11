import React from 'react'
import PropTypes from "prop-types"

import Menu from './menu'
import HomeSearch from './home-search'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <>
            <html>
                <head>
                    <title>Work Scout</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                </head>

                <body>
                    <div id="wrapper">

                        <header>
                            <div class="container">
                                <div class="sixteen columns">


                                    <div id="logo">
                                        <h1><a href="index.html"><img src="images/logo.png" alt="Work Scout" /></a></h1>
                                    </div>

                                    <Menu></Menu>


                                    <div id="mobile-navigation">
                                        <a href="#menu" class="menu-trigger"><i class="fa fa-reorder"></i> Menu</a>
                                    </div>

                                </div>
                            </div>
                        </header>
                        <div class="clearfix"></div>
                        {children}
                        <Footer></Footer>
                        <div id="backtotop"><a href="#"></a></div>

                    </div>
                    <script src="scripts/jquery-2.1.3.min.js"></script>
                    <script src="scripts/custom.js"></script>
                    <script src="scripts/jquery.superfish.js"></script>
                    <script src="scripts/jquery.themepunch.tools.min.js"></script>
                    <script src="scripts/jquery.themepunch.revolution.min.js"></script>
                    <script src="scripts/jquery.themepunch.showbizpro.min.js"></script>
                    <script src="scripts/jquery.flexslider-min.js"></script>
                    <script src="scripts/chosen.jquery.min.js"></script>
                    <script src="scripts/jquery.magnific-popup.min.js"></script>
                    <script src="scripts/waypoints.min.js"></script>
                    <script src="scripts/jquery.counterup.min.js"></script>
                    <script src="scripts/jquery.jpanelmenu.js"></script>
                    <script src="scripts/stacktable.js"></script>
                </body>
            </html>
        </>
    )
}


Layout.propTypes = {
    children: PropTypes.node.isRequired,
}


export default Layout