// INTERNAL
// components
import Banner from './Banner';
import About from './About';
import Projects from './Projects';

// stylesheets
import '../stylesheets/Content.scss';
const Content=()=>{

    return (
        <div className="Content">
            <Banner />
            <About />
            <Projects />
        </div>
    )
}

export default Content;