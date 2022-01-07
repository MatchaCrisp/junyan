import {useState} from 'react';
import './stylesheets/App.scss';
import HeadNav from './comp/HeadNav';
import Content from './comp/Content';
import FootNav from './comp/FootNav';

import {createTheme,ThemeProvider} from '@mui/material/styles';
// font-awesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
// need to import: html5, css, sass, bootstrap, javascript
// reactjs, d3js python java material ui flask postgres sqlite
import {fab} from '@fortawesome/free-brands-svg-icons';

// add to global
library.add(fab);


function App() {
  const [isDark, setIsDark]=useState(true);
  
  const defaultTheme=createTheme();
  const theme=createTheme({
    palette:{
      type:isDark?'dark':'light',
      primary:{
        dark:"#000066",
        main:"#000066",
        light:"#fffbef"
      },
      secondary:{
        dark:"#bfcfff",
        main:"#bfcfff",
        light:"#b3a885"
      },
      primOff:defaultTheme.palette.augmentColor({
        color:{
          dark:"#001247",
          main:"#001247",
          light:"#fff7df",
          name:"primOff"
        }
      }),
      secOff:defaultTheme.palette.augmentColor({
        color:{
          dark:"#809fff",
          main:"#809fff",
          light:"#a5986f",
          name:"secOff"
        }
      })
    }
  })
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
        <HeadNav />
        <Content />
        <FootNav />
      </ThemeProvider>
    </div>
  );
}

export default App;

/*
later:

      
      
      
*/