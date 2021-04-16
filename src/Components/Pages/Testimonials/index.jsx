import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import ReactPlayer from 'react-player'
import Slider from 'infinite-react-carousel';
import TextModel from '../../PageText/model';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

export default function TestimonialsPage() {
    const {Testimonials} = TextModel;
    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Testimonials</Typography> 
            </div>

            <Slider 
                dots
                autoplay
                autoplaySpeed={5000}
                pauseOnHover={true}
            >
                <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} style={{marginLeft:"10%", marginRight:"10%"}}>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=155aE_wNwNw&t=5s&ab_channel=AstonUniversity'
                            width={"90%"}
                            controls={true}
                        /> 
                    </Grid>
                    <Grid item xs={12} sm={12} style={{}}>
                        <Typography variant={"h6"} style={{backgroundColor:"#FF9505", textAlign:"center", color:"#FFFFFF"}}>
                            {Testimonials.slider.one} - {Testimonials.slider.one2}
                        </Typography>
                    </Grid>
                </Grid>
                </div>

                <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} style={{marginLeft:"10%", marginRight:"10%"}}>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=wcJ6LCgN-Nw&t=1s&ab_channel=AstonUniversity'
                            width={"90%"}
                            controls={true}
                        /> 
                    </Grid>
                    <Grid item xs={12} sm={12} style={{}}>
                        <Typography variant={"h6"} style={{backgroundColor:"#FF9505", textAlign:"center", color:"#FFFFFF"}}>
                            {Testimonials.slider.two} - {Testimonials.slider.two2}
                        </Typography>
                    </Grid>
                </Grid>
                {/* <Grid container spacing={1}>
                    <Grid item xs={12} sm={8} style={{marginLeft:"4%"}}>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=wcJ6LCgN-Nw&t=1s&ab_channel=AstonUniversity'
                            width={"100%"}
                        /> 
                    </Grid>
                    <Grid item xs={12} sm={3} style={{}}>
                        <Typography variant={"h6"} style={{backgroundColor:"#FF9505", marginRight: "2%", marginBottom: "5%", lineHeight: 2, textAlign:"center", color:"#FFFFFF"}}>
                            {Testimonials.slider.two}
                        </Typography>
                        <Typography style={{marginRight: "10%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Testimonials.slider.two2}
                        </Typography>
                    </Grid>
                </Grid> */}
                </div>
                <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} style={{marginLeft:"10%", marginRight:"10%"}}>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=_o8e55dz7Eo'
                            width={"90%"}
                            controls={true}
                        /> 
                    </Grid>
                    <Grid item xs={12} sm={12} style={{}}>
                        <Typography variant={"h6"} style={{backgroundColor:"#FF9505", textAlign:"center", color:"#FFFFFF"}}>
                            {Testimonials.slider.three} - {Testimonials.slider.three2}
                        </Typography>
                    </Grid>
                </Grid>
                </div>
                <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} style={{marginLeft:"10%", marginRight:"10%"}}>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=nJr1szeKYSI'
                            width={"90%"}
                            controls={true}
                        /> 
                    </Grid>
                    <Grid item xs={12} sm={12} style={{}}>
                        <Typography variant={"h6"} style={{backgroundColor:"#FF9505", textAlign:"center", color:"#FFFFFF"}}>
                            {Testimonials.slider.four} - {Testimonials.slider.four2}
                        </Typography>
                    </Grid>
                </Grid>
                </div>
            </Slider>

            <Typography align={"center"} variant={"h4"} style={{marginTop:"4%"}}>
                More Testimonials
            </Typography>
                 
            <Grid container spacing={5} style={{paddingLeft:"2%", paddingRight:"2%"}}>
                <Grid item xs={12} sm={4}>
                    <Typography style={{color: '#83008F', fontSize: '55px'}} align={'center'}>
                        <FormatQuoteIcon style={{fontSize:40}}/>
                    </Typography> 
                    <Typography variant={"h6"} style={{ marginBottom: "5%", lineHeight: 2, textAlign:"center", fontStyle:"italic"}}>
                        Joining The Step-Up Sorority was one of the best decisions I’ve made. Pursuing a career in technology as a woman is not the easiest, 
                        and there are so many days where I feel like I’m at a dead end or imposter syndrome kicks in.
                    </Typography>
                    <Typography variant={"h6"} style={{ color: '#83008F', marginBottom: "5%", lineHeight: 2, textAlign:"center", fontStyle:"italic"}}>
                        -Tim Read.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography style={{color: '#83008F', fontSize: '55px'}} align={'center'}>
                        <FormatQuoteIcon style={{fontSize:40}}/>
                    </Typography> 
                    <Typography variant={"h6"} style={{ marginBottom: "5%", lineHeight: 2, textAlign:"center", fontStyle:"italic"}}>
                        However, SUS matched me with an amazing mentor who has provided me with great advice and tips with how to navigate this industry. 
                        She genuinely has fulfilled her title as a “big sister” and I appreciate the effort and time she puts into making sure I’m equipped for the industry I’m entering. 
                    </Typography>  
                    <Typography variant={"h6"} style={{ color: '#83008F', marginBottom: "5%", lineHeight: 2, textAlign:"center", fontStyle:"italic"}}>
                        -Abi Khan.
                    </Typography>        
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography style={{color: '#83008F', fontSize: '55px'}} align={'center'}>
                        <FormatQuoteIcon style={{fontSize:40}}/>
                    </Typography> 
                    <Typography variant={"h6"} style={{ marginBottom: "5%", lineHeight: 2, textAlign:"center", fontStyle:"italic"}}>
                        I always leave our calls feeling motivated and encouraged to keep going. Another thing I love about SUS is the community of women that has been built, 
                        it’s just amazing to see and be a part of.
                    </Typography>
                    <Typography variant={"h6"} style={{ color: '#83008F', marginBottom: "5%", lineHeight: 2, textAlign:"center", fontStyle:"italic"}}>
                        -Precious Wallace.
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}