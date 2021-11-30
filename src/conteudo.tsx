
import {
    Grid,
    Toolbar,
    Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, typography } from "@mui/system";
// import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

const videos = [{
    id: 1,
    title:
        'Aprenda a decorar sua mesa de estudos/trabalho',
    channel: 'Jose Fernando',
    views: '10 mi de vizualizações',
    date: 'há 1 semana',
    avatar: 'public/images/',
    thumb: '/images/cacto.jpeg',
},
{
    id: 2,
    title:
        'Aprenda pratos diferentes',
    channel: 'Jose Fernando',
    views: '8 mil vizualizações',
    date: 'há 1 semana',
    avatar: 'public/images/',
    thumb: '/images/culinaria.jpeg',
},
{
    id: 3,
    title:
        'Saiba como eram as festas na época das câmeras preto e branco',
    channel: 'Jose Fernando',
    views: '13 mi de vizualizações',
    date: 'há 1 ano',
    avatar: 'public/images/',
    thumb: '/images/festa.jpeg',
},
{
    id: 4,
    title:
        'Curiosidades sobre as guerras',
    channel: 'Jose Fernando',
    views: '100 mil vizualizações',
    date: 'há 1 hora',
    avatar: 'public/images/',
    thumb: '/images/guerra.jpeg',
},
{
    id: 5,
    title:
        'Aprenda a fazer suas makes de um jeito diferente',
    channel: 'Jose Fernando',
    views: '47 mil vizualizações',
    date: 'há 2 meses',
    avatar: 'public/images/',
    thumb: '/images/make.jpg',
},
{
    id: 6,
    title:
        'Tecnicas de sobrevivência em alto mar',
    channel: 'Jose Fernando',
    views: '300 mi de vizualizações',
    date: 'há 6 anos',
    avatar: 'public/images/',
    thumb: '/images/mar.jpeg',
},
{
    id: 7,
    title:
        'Conheça as trilhas mais perigosas do mundo',
    channel: 'Jose Fernando',
    views: '2 mil vizualizações',
    date: 'há 2 semanas',
    avatar: 'public/images/',
    thumb: '/images/natureza.jpeg',
},
{
    id: 8,
    title:
        '5 tecnicas para não prejudicar sua visão ao mexer no celular/computador',
    channel: 'Jose Fernando',
    views: '20 mil vizualizações',
    date: 'há 5 anos',
    avatar: 'public/images/',
    thumb: '/images/oculos.jpeg',
},
]

export function Conteudo() {
    const classes = useStyles()

    return <div className={classes.root}>
        <Box p={8}>
            <Toolbar />
            <Typography
                variant='h5'
                color='textPrimary'
                style={{ fontWeight: 600 }}
            >
                Recomendados
            </Typography>

            <Grid container spacing={4}>
                {videos.map((item, index) => (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <img
                                style={{ width: '100%' }}
                                alt={item.title}
                                src={item.thumb}
                            />
                        </Box>
                        <Typography
                            style={{ fontWeight: 600 }}
                            gutterBottom
                            variant='body1'
                            color='textPrimary'
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            display='block'
                            variant='body2'
                            color='textSecondary'
                        >
                            {item.channel}
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                            {`${item.views} . ${item.date}`}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>

    </div >
}