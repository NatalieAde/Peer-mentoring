import React from 'react';
import image from '../../imgt.png'
import { Grid, Typography, Button } from '@material-ui/core';

function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;

    return <div onClick={clickFunction}>{icon}</div>;
}

const SLIDE_INFO = [
    { img: '/chat.svg', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.', 
    button: 'Register' },
    { img: 'chat', text: 'Slide 2' },
    { img: 'one', text: 'Slide 3' },
];

const [index, setIndex] = useState(0);
const content = SLIDE_INFO[index];
const numSlides = SLIDE_INFO.length;

const [slideIn, setSlideIn] = useState(true);
const [slideDirection, setSlideDirection] = useState('down');

const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
        setIndex(newIndex);
        setSlideDirection(oppDirection);
        setSlideIn(true);
    }, 500);
};

useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.keyCode === 39) {
            onArrowClick('right');
        }
        if (e.keyCode === 37) {
            onArrowClick('left');
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
});

<div>
<Arrow
    direction='left'
    clickFunction={() => onArrowClick('left')}
/>
<Slide in={slideIn} direction={slideDirection}>
    <div>
        <HomeSlide content={content} />
    </div>
</Slide>
<Arrow
    direction='right'
    clickFunction={() => onArrowClick('right')}
/>
</div>

export default function HomeSlide(props) {
    const { img, text, button  } = props.content;

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={9}>
                <div style={{marginTop: "-5%"}}>
                    <img src={image} alt="Logo" style={{width: "100%"}} />
                </div>
            </Grid>
            <Grid item xs={12} sm={3} style={{marginTop:"5%"}}>
                <Typography style={{marginRight: "10%", marginLeft: "10%", marginBottom: "20%", lineHeight: 2,}}>
                    {text}
                </Typography>
                {button &&
                    <div style={{marginLeft:"25%"}}>
                    <Button variant="contained" style={{backgroundColor: '#FF9505', color: '#FFFFFF', textTransform: 'none', fontSize: 20}} href="/registration">
                        {button}
                    </Button>
                </div>
                }
                
            </Grid>
        </Grid>
    );
}