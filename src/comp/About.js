import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../stylesheets/About.scss';

const About=()=>{
    const dispMsg=`Hello and welcome! I'm Junyan, 
    a programmer well-versed with the functional/hooks side of React. 
    But I'm always looking to expand my range of skills. 
    For instance recently its NodeJs!
    You are welcome to take a look at what I've been working on recently. 
    Chances are the source code are hosted on GitHub, and linked down below.`
    return (
    <Container 
        sx={{backgroundColor:"primary"}} 
        className='about-me-sect' 
        id='about'
    >
        <Typography variant="h4">JavaScript Developer</Typography>
        <Typography align="justify">{dispMsg}</Typography>
    </Container>
    )
}

export default About;