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
    Box,
} from "@mui/material"
import Apps from "@mui/icons-material/Apps";
import { ListSubheader } from "@mui/material";

import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import Subscriptions from '@mui/icons-material/Subscriptions';
import Whatshot from '@mui/icons-material/Whatshot';
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import History from '@mui/icons-material/History';

import AddCircle from "@mui/icons-material/AddCircle";

import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreVert from '@mui/icons-material/MoreVert';
import VideoCall from '@mui/icons-material/VideoCall';
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
        flexGrow: 1,
    },
    ListItemText: {
        fontSize: '14px !important',
    },
    listItem: {
        paddingTop: '4px !important',
        paddingBottom: '4px !important',
    },
    subheader: {
        textTransform: 'uppercase',
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
            variant={estadoDoMenu === 'fixo' ? 'permanent' : "temporary"}
            open={estadoDoMenu === 'aberto'}
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
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon> {<HomeIcon />} </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Início'} />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon> {<Whatshot />} </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Em Alta'} />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon> {<Subscriptions />} </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Inscrições'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <VideoLibrary />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Biblioteca'} />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <History />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Histórico'} />
                    </ListItem>
                </List>
                <Divider />
                <Box p={7}>
                    <Typography variant='body2'>
                        Faça login para curtir vídeos, comentar e se increver.
                    </Typography>
                    <Box mt={2}>
                        <Button
                            variant='outlined'
                            color='secondary'
                            startIcon={<AccountCircle />}>
                            Fazer login
                        </Button>
                    </Box>
                </Box>
                <Divider />


                <List 
                    component='nav'
                    arial-labelledby='nested-list-subheader'
                    subheader={
                        <ListSubheader
                        component='div'
                        id='nested-list-subheader'
                        className={classes.subheader}
                        >
                            O melhor do youtube
                        </ListSubheader>
                    }
                >
                <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Músicas'} />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Esportes'} />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Jogos'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Filmes'} />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Notícias'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Ao vivo'} />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Destaques'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Vídeos 360'} />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }} onClick={fixarMenu}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.ListItemText
                            }} primary={'Procurar mais'} />
                    </ListItem>
                </List>
                <Divider />
            </div>
        </Drawer>
    );
}

export default MenuFlutuante;