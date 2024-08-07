import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const navbarStyle = {
        backgroundColor: '#1da2d8',
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        display: isMobile && isDrawerOpen ? 'none' : 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        transition: 'all 0.3s ease'
    };

    const ulStyle = {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        marginRight: '20px'
    };

    const liStyle = {
        display: 'inline'
    };

    const linkStyle = {
        display: 'inline-block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 20px',
        textDecoration: 'none',
        transition: 'color 0.3s'
    };

    const drawerStyle = {
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100%',
        width: '250px',
        backgroundColor: '#1da2d8',
        boxShadow: '0 0 5px rgba(0,0,0,0.3)',
        transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        overflowY: 'auto',
        zIndex: 1000,
        padding: '20px',
        boxSizing: 'border-box'
    };

    const drawerLinkStyle = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 20px',
        textDecoration: 'none',
        transition: 'color 0.3s'
    };

    const drawerToggleButtonStyle = {
        background: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '24px',
        padding: '14px 20px',
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1100,
        display: isMobile ? 'block' : 'none'
    };

    return (
        <div>
            {/* Drawer Toggle Button */}
            <button
                onClick={toggleDrawer}
                style={drawerToggleButtonStyle}
            >
                {isDrawerOpen ? '×' : '☰'}
            </button>

            {/* Main Navbar */}
            {!isMobile || isDrawerOpen ? (
                <nav style={navbarStyle}>
                    <ul style={ulStyle}>
                        {['Home', 'About', 'Practice DSA', 'Practice Dev', 'Contact'].map((item, index) => (
                            <li key={index} style={liStyle}>
                                <Link
                                    to={item === 'Home' ? '/CodeLikeGoat' : `/${item.toLowerCase().replace(/ /g, '-')}`}
                                    style={linkStyle}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            ) : null}

            {/* Side Drawer */}
            <div style={drawerStyle}>
                <button
                    onClick={toggleDrawer}
                    style={drawerToggleButtonStyle}
                >
                    ×
                </button>
                <div style={{ padding: '20px' }}>
                    {['Home', 'About', 'Practice DSA', 'Practice Dev', 'Contact'].map((item, index) => (
                        <Link
                            key={index}
                            to={item === 'Home' ? '/CodeLikeGoat' : `/${item.toLowerCase().replace(/ /g, '-')}`}
                            style={drawerLinkStyle}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
