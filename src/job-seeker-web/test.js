import React from 'react'
import PropTypes from "prop-types"
import Menu from './menu'
import HomeSearch from './home-search'
import Footer from './footer'
const Layout = ({ children }) => {
    return (
        <>
            <Menu></Menu>
            <HomeSearch></HomeSearch>
            {children}
            <Footer></Footer>
        </>
    )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Layout