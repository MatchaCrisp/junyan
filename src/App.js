
import './stylesheets/App.scss';
import HeadNav from './comp/HeadNav';
import Banner from './comp/Banner';
import About from './comp/About';
import Projects from './comp/Projects';
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
      <Banner />
      <About aboutInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <Projects />
      <FootNav />
    </div>
  );
}

export default App;

/*
later:

      
      
      
*/