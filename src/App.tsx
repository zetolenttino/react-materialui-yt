import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Home from './Home';

const useStyles = makeStyles({
  root: {
  },
});

function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#e65100',
      },
      secondary: {
        main: '#01579b'
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
