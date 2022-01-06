import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const About=({aboutInfo})=>{

    return (
    <Container className='aboutMe' id='about'>
        <Typography variant="h4">About Me</Typography>
        <Typography>{aboutInfo}</Typography>
    </Container>
    )
}

export default About;