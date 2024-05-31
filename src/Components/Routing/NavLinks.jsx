import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Helper/NavStyle.css';
import { AppBar, Badge, Box, Grid, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Context } from '../ContextApi/Context';

const Links = () => {
    const {products} = useContext(Context);
    const navigate = useNavigate();
    const goToCartPage = () => {
        navigate("/cartPage");
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Grid display="flex" gap={2}>
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive ? "activeNav" : "inactive";
                                }}
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive ? "activeNav" : "inactive";
                                }}
                                to="/about"
                            >
                                About
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive ? "activeNav" : "inactive";
                                }}
                                to="/Products"
                            >
                                Products
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive ? "activeNav" : "inactive";
                                }}
                                to="/contact"
                            >
                                Contact{" "}
                            </NavLink>
                            <div onClick={goToCartPage}>
                                <Badge badgeContent={products} color="success">
                                    <ShoppingCart color="action" />
                                </Badge>
                            </div>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Links;
