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
import MenuFlutuante from "./menuFlutuante";
import BarraAplicacao from "./barraAplicacao";
import { useEstadoDaAplicacao } from "./estadoDaAplicacao";

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
        borderRight: 'none',
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

function Home() {
    const {
        estadoDoMenu,
        abrirMenu,
        fecharMenu,
        fixarMenu,
    } = useEstadoDaAplicacao()
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BarraAplicacao abrirMenu={abrirMenu}/>


            <MenuFlutuante estadoDoMenu={estadoDoMenu} fecharMenu={fecharMenu} fixarMenu={fixarMenu}/>
        </div>
    );
}

export default Home;