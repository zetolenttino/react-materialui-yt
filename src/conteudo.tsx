
import { Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '4px',
    },
}));

export function Conteudo() {
    const classes = useStyles()

    return <div className={classes.root}>
        <Toolbar />
        <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 800 }}
        >
            Recomendados
        </Typography>
    </div>
}