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
import { EstadoDoMenu } from "./estadoDaAplicacao";

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

export interface MenuFlutuanteProps {
    estadoDoMenu: EstadoDoMenu
    fixarMenu(): void
    fecharMenu(): void
}

function MenuFlutuante({ estadoDoMenu, fixarMenu, fecharMenu }: MenuFlutuanteProps) {    
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant={estadoDoMenu==='fixo'?'permanent':"temporary"}
            open={estadoDoMenu==='aberto'}
            onClose={fecharMenu}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar>
                <IconButton
                    edge='start'
                    className={classes.menuIcon}
                    color='inherit'
                    aria-label='menu'
                    onClick={fecharMenu}
                >
                    <MenuIcon />
                </IconButton>
                <img src='/images/logo.youtube.jpg' alt='logo' className={classes.logo} />
            </Toolbar>
            <div className={classes.drawerContainer}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text} onClick={fixarMenu}>
                            {/* <ListItemIcon> {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            {/* <ListItemIcon>{index % 2 === 0? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );
}

export default MenuFlutuante;