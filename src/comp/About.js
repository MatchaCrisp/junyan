// EXTERNAL
// MUI components
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// INTERNAL
import '../stylesheets/About.scss';

const About=()=>{
    const dispMsg=`Hello and welcome! I'm Junyan, 
    a programmer well-versed with the functional/hooks side of React. 
    I'm also fluent with HTML5, CSS3, JavaScript, Python, Java, and SQL.
    But I'm always looking to expand my range of skills. 
    For instance recently its NodeJs!
    You are welcome to take a look at what I've been working on recently. 
    Chances are the source code are hosted on GitHub, and linked down below.`
    return (
    <Container 
        sx={{backgroundColor:"primary"}} 
        className='About' 
        id='about-me'
    >
        <Typography variant="h4">Frontend Developer</Typography>
        <Typography align="justify">{dispMsg}</Typography>
    </Container>
    )
}

export default About;