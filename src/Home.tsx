import { makeStyles } from '@mui/styles';
import MenuFlutuante from "./menuFlutuante";
import BarraAplicacao from "./barraAplicacao";
import { useEstadoDaAplicacao } from "./estadoDaAplicacao";
import { Conteudo } from "./conteudo";

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

            <Conteudo/>
        </div>
    );
}

export default Home;