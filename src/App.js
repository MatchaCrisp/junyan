import './stylesheets/App.scss';
import HeadNav from './comp/HeadNav';
import Content from './comp/Content';
import FootNav from './comp/FootNav';

// font-awesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
// need to import: html5, css, sass, bootstrap, javascript
// reactjs, d3js python java material ui flask postgres sqlite
import {fab} from '@fortawesome/free-brands-svg-icons';

// add to global
library.add(fab);


function App() {
  
  return (

    <div className="App">

        <HeadNav />
        <Content />
        <FootNav />

    </div>
  );
}

export default App;

/*
later:

      
      
      
*/