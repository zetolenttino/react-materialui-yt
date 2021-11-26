import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Button,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import Apps from "@mui/icons-material/Apps";
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import AppsIcon from '@mui/icons-material/Apps'
import MoreVert from '@mui/icons-material/MoreVert'
import VideoCall from '@mui/icons-material/VideoCall'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        // zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: '50px',
    },
    drawer: {
        width: '240px',
        flexShrink: '0',
    },
    drawerPaper: {
        width: '240px',
    },
    drawerContainer: {

    },
    menuIcon: {
        paddingRight: '40px',
        paddingLeft: '48px',
    },
    icons: {
        paddingRight: '40px',
    },
    grow: {
        flexGrow: 1
    }
}));

export interface BarraAplicacaoProps {
    abrirMenu(): void
}

function BarraAplicacao({abrirMenu}: BarraAplicacaoProps) {
    const classes = useStyles();

    return (
        <AppBar color='inherit' className={classes.appBar}>
            <Toolbar>
                <IconButton
                    edge='start'
                    className={classes.menuIcon}
                    color='inherit'
                    aria-label='menu'
                    onClick={abrirMenu}
                >
                    <MenuIcon />
                </IconButton>
                <img src='/images/logo.youtube.jpg' alt='logo' className={classes.logo} />
                <div className={classes.grow} />
                <IconButton className={classes.icons} color='inherit'>
                    <VideoCall />
                </IconButton>
                <IconButton className={classes.icons} color='inherit'>
                    <AppsIcon />
                </IconButton>
                <IconButton className={classes.icons} color='inherit'>
                    <MoreVert />
                </IconButton>
                <Button
                    startIcon={<AccountCircle />}
                    variant='outlined' color='secondary'>
                    Fazer login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default BarraAplicacao;