import About from './About';
import Projects from './Projects';
import '../stylesheets/Content.scss';
const Content=()=>{

    return (
        <div className="main_content">
            <About />
            <Projects />
        </div>
    )
}

export default Content;