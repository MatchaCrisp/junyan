//EXTERNAL
// font-awesome icons
// need to import: html5, css, sass, bootstrap, javascript
// reactjs, d3js python java material ui flask postgres sqlite
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

// INTERNAL
import './stylesheets/App.scss';
import HeadNav from './comp/HeadNav';
import Content from './comp/Content';
import FootNav from './comp/FootNav';

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
