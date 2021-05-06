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
                        I absolutely have no regrets joining this mentoring scheme. I was matched with an amazing mentor who complely
                        understood how I was feeling and what I was going through and he gave me great tips on how to combat stress.
                        I honestly don't know how I would have coped with uni if I hadn't joined the scheme.
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
                        I would honestly encourage everyone to register to become a mentor. It's just such a fulfilling role. I absolutely enjoyed
                        my experience as a mentor, and I completed the scheme having made a great friend.
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
                        Joining this scheme matched me with the best mentor ever. During my second year I was really struggling with applying for placements,
                        but my mentor helped me with the entire process. He shared some things he had learned when he was applying for placements and gave me some great 
                        tips and resources for interviews. Couldn't have chosen a better match, everyone should apply for this scheme.
                    </Typography>
                    <Typography variant={"h6"} style={{ color: '#83008F', marginBottom: "5%", lineHeight: 2, textAlign:"center", fontStyle:"italic"}}>
                        -Precious Wallace.
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}