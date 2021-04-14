import React, { useState, useRef, useEffect } from 'react';
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Dialog,
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    IconButton
} from '@material-ui/core';
import DialogCustom from '../../Dialog/index'; 
import CardCustom from '../../Card/index';
import HomeImg from '../../../Images/imgt.png';
import TeamworkImg from '../../../Images/pair1.jpg';
import CodingImg from '../../../Images/pair2.jpg';
import ExerciseImg from '../../../Images/exercise.png';
import SocialInteractionImg from '../../../Images/individual1.jpg';
import PersonalImg from '../../../Images/personalInfo.png';
import GradImg from '../../../Images/grad.png';
import WorkImg from '../../../Images/pair3.jpg';
import EdImg from '../../../Images/education.png';
import Wheel1Img from '../../../Images/balanceWheel.jpg';
import Wheel2Img from '../../../Images/balanceWheel2.jpg';
import Pair13Img from '../../../Images/pair13Mask.jpg';
import Pair13bImg from '../../../Images/pair13bMask.jpg';
import Pair14Img from '../../../Images/pair14.jpg';
import Pair18Img from '../../../Images/pair18.jpg';
import Pair5Img from '../../../Images/pair5.jpg';

import TextModel from '../../PageText/model';

import useStyles from './styles';

const resource =[
    {
        id: 1,
        img: WorkImg,
        title: "Guidelines for Mentoring New Students",
        category: "Mentoring Guideline",
        snippet: 'The transition from school, college or work to university is life changing but can also be daunting. New students can benefit from',
        para1: `The transition from school, college or work to university is life changing but can also be daunting. New students can benefit from the 
                experience of someone who remembers how it feels starting at University, perhaps even moving to a new city or country, and knows the questions they 
                had when they were in the same position. Hearing about the experiences of a current student who remembers what it was like for them when they 
                started at Aston can help students to settle in quickly and make the most of their first year.`,
        para2: `New first year undergraduates are matched to a second year (or sometimes final year) mentor from their degree programme.`,
        para3: `Some of the mentees are international exchange students who are here for just a term or for one academic year.`,
        subTitle: `Things you could discuss:`,
        list: [
            'Settling in. Getting used to student life, finding your way around the campus, making friends, signposting to support services, tips and advice you would have liked to have known when you were new to Aston.',
            'University level study & structure. Explaining how lectures/tutorials/labs etc. work and what the differences are, using the library, your personal tutor and what they can do for you.',
            'Achieving a good study/life balance. Managing your time so you can study effectively and still enjoy a good social life, study skills, exam revision.',
            'Getting involved in student life. Extra-curricular activities, what the Students Union has to offer, sport facilities and clubs, societies, volunteering opportunities, mentoring throughout the student lifecycle.',
            'For students new to Birmingham. Moving to a new city, leaving home for the first time, local transport, eating out, shopping and things to do in Birmingham and the Midlands.',
            'For students new to the UK. International students will be looking for an insight into UK culture, maybe an opportunity to practice their English, and often like to travel around the UK whilst here so might want some information about how to plan their trip.',
            'For students commuting to Aston. How to integrate fully into Aston life when you don’t live on campus.',
            'Getting a head start. Forward planning for placement year and for your future career, starting to plan and gain the skills you need to get ahead and achieve your goals.',
            'And beyond…As the year continues you can give your mentee an insight into the second year of study and beyond.',
        ]
        
    },
    {
        id: 2,
        img: SocialInteractionImg,
        title: "Student Support and Services at Aston University",
        category: "Support",
        snippet: 'The Hub is located on the ground floor of the main building and can be used on a drop in basis, but',
        subTitle1: `Counselling`,
        para1: `The Counselling and Mental Wellbeing Team are based in Room 21 on the upper ground floor, Main Building, opposite the IT Helpdesk.`,
        para2: `The Counselling and Mental Wellbeing Service offers support from qualified counsellors/psychotherapy practitioners and those in training. Whether you are just embarking on your life at University or you are further along with your academic studies, we can help you work through the issues that are troubling you.`,
        para3: `Email: counselling@aston.ac.uk
                Phone: 0121 204 4007`,
    },
    {
        id: 3,
        img: TeamworkImg,
        title: "Guidelines for Mentoring Students Looking for a Placement",
        category: "Mentoring Guideline",
        snippet: 'Placement Mentors are usually third years who are currently out on placement, who offer mentoring via e-mail.',
        para1: `Placement Mentors are usually third years who are currently out on placement, who offer mentoring via e-mail. Occasionally a Placement
                Mentor might be a final year recently returned from their placement year.`,
        para2: `Matching is based primarily on placement area rather than degree programme.`,
        para3: `Mentoring will give the mentee a student’s perspective of the placement experience and should complement other support offered across 
                the university, such as from your placement co-ordinator.`,
        subTitle: `Things you could discuss:`,
        list: [
            'Benefits of doing a placement. Whilst some degree programmes have a compulsory placement year, for others it is optional, so for these students you can discuss the benefits of doing a placement. What did you get out of it? How have you developed because of your placement? Talk about the opportunity for enhanced employability, learn new skills, see how your degree translates into the real world, a chance to test out one of your career options in a safe way.',
            'What is doing a placement REALLY like? Working 9-5, fitting in with other employees, being away from campus, adjusting from study to work and back again - What’s it like coming back to full time study after your placement? OR for study abroad – what is it like to adjust to a new University in a new country etc?',
            'Choosing the right placement. Some students might have a few different ideas and options about what placement they want to go for, a mentor can help the mentee with the decision making process, weighing up the pros and cons, and even deciding between placement offers in some cases!',
            'Practical tips. How to organise your placement search, being aware of any early deadlines, where to search for vacancies, getting CVs and applications spot on and tailored to each vacancy, preparing for interviews and assessment days, how to really sell yourself and your skills. Perhaps practical advice about finding accommodation abroad and other useful tips for those doing an international placement.',
            'Insight into final year - If you are doing similar degree programmes you could also think about what to expect from the final year of study.',
            'Keeping Motivated. Mentors should give motivation and encouragement to their mentees and keep them going throughout the placement search. It is not uncommon for second year students to secure their placements towards the end of the summer of their second year.',
        ]
    },
    {
        id: 4,
        img: CodingImg,
        img2: Wheel1Img,
        img3: Wheel2Img,
        title: "Balance Wheel",
        category: "Tips and Tools",
        snippet: 'The Balance Wheel is an adaptable mentoring tool which can help you to identify which areas you may wish to explore during your mentoring relationship, ',
        para1:`The Balance Wheel is an adaptable mentoring tool which can help you to identify which areas you may wish to explore during your mentoring relationship, and enables the identification and setting of goals. The eight 
                sections of the wheel represent balance or satisfaction. The more a section is shaded, the more level of satisfaction within that area of your life.`,
        list: [
            `Draw a circle and intersections and name each segment as an area of your life or study which is important to you.`,
            'Your areas may include study as well as socialising, family, volunteering or part time work. Or you might focus solely on study and look at specific elements of your course and University life, for example particular modules or planning for placement.',
            'Now shade out how satisfied or content you feel in each of these areas. This is not about how much time you spend on each, or how highly you achieve, it is about personal satisfaction in each area. In the above example the person might have said ‘I feel like my volunteering is great and I’m really enjoying it, so I’ll shade that one in full, but I am finding my social life boring and unfulfilling.’',
            'The perfect wheel should be balanced. Areas in which you have not shaded very much need some attention. If you do this exercise with your mentee/mentor, this would give you a good basis of which areas need focusing on and which you can work together on.',
            'To improve the balance of your wheel, and the balance of your life - you need to have a strategy of setting targets – see Smart Targets for guidance on this.',
            'The balance wheel can be completed as an initial assessment, then repeated following a period of time to observe progress and review targets.',
        ]
    },
    {
        id: 5,
        img: Pair13Img,
        img2: Pair13bImg,
        title: "Mentoring in a Pandemic",
        category: "Blog",
        snippet: 'The Balance Wheel is an adaptable mentoring tool which can help you to identify which areas you may wish to explore during your mentoring relationship, ',
        para1:`The Balance Wheel is an adaptable mentoring tool which can help you to identify which areas you may wish to explore during your mentoring relationship, and enables the identification and setting of goals. The eight 
                sections of the wheel represent balance or satisfaction. The more a section is shaded, the more level of satisfaction within that area of your life.`,
        list: [
            `Draw a circle and intersections and name each segment as an area of your life or study which is important to you.`,
            'Your areas may include study as well as socialising, family, volunteering or part time work. Or you might focus solely on study and look at specific elements of your course and University life, for example particular modules or planning for placement.',
            'Now shade out how satisfied or content you feel in each of these areas. This is not about how much time you spend on each, or how highly you achieve, it is about personal satisfaction in each area. In the above example the person might have said ‘I feel like my volunteering is great and I’m really enjoying it, so I’ll shade that one in full, but I am finding my social life boring and unfulfilling.’',
            'The perfect wheel should be balanced. Areas in which you have not shaded very much need some attention. If you do this exercise with your mentee/mentor, this would give you a good basis of which areas need focusing on and which you can work together on.',
            'To improve the balance of your wheel, and the balance of your life - you need to have a strategy of setting targets – see Smart Targets for guidance on this.',
            'The balance wheel can be completed as an initial assessment, then repeated following a period of time to observe progress and review targets.',
        ]
    },
    {
        id: 6,
        img: Pair14Img,
        title: "Setting SMART Goals",
        category: "Tips and Tools",
        snippet: 'The Balance Wheel is an adaptable mentoring tool which can help you to identify which areas you may wish to explore during your mentoring relationship, ',
        para1:`The Balance Wheel is an adaptable mentoring tool which can help you to identify which areas you may wish to explore during your mentoring relationship, and enables the identification and setting of goals. The eight 
                sections of the wheel represent balance or satisfaction. The more a section is shaded, the more level of satisfaction within that area of your life.`,
        list: [
            `Draw a circle and intersections and name each segment as an area of your life or study which is important to you.`,
            'Your areas may include study as well as socialising, family, volunteering or part time work. Or you might focus solely on study and look at specific elements of your course and University life, for example particular modules or planning for placement.',
            'Now shade out how satisfied or content you feel in each of these areas. This is not about how much time you spend on each, or how highly you achieve, it is about personal satisfaction in each area. In the above example the person might have said ‘I feel like my volunteering is great and I’m really enjoying it, so I’ll shade that one in full, but I am finding my social life boring and unfulfilling.’',
            'The perfect wheel should be balanced. Areas in which you have not shaded very much need some attention. If you do this exercise with your mentee/mentor, this would give you a good basis of which areas need focusing on and which you can work together on.',
            'To improve the balance of your wheel, and the balance of your life - you need to have a strategy of setting targets – see Smart Targets for guidance on this.',
            'The balance wheel can be completed as an initial assessment, then repeated following a period of time to observe progress and review targets.',
        ]
    },
    {
        id: 7,
        img: Pair18Img,
        title: "What I Gained from Mentoring",
        category: "Blog",
        snippet: 'The Balance Wheel is an adaptable mentoring tool which can help you to identify which areas you may wish to explore during your mentoring relationship, ',
        para1:`The Balance Wheel is an adaptable mentoring tool which can help you to identify which areas you may wish to explore during your mentoring relationship, and enables the identification and setting of goals. The eight 
                sections of the wheel represent balance or satisfaction. The more a section is shaded, the more level of satisfaction within that area of your life.`,
        list: [
            `Draw a circle and intersections and name each segment as an area of your life or study which is important to you.`,
            'Your areas may include study as well as socialising, family, volunteering or part time work. Or you might focus solely on study and look at specific elements of your course and University life, for example particular modules or planning for placement.',
            'Now shade out how satisfied or content you feel in each of these areas. This is not about how much time you spend on each, or how highly you achieve, it is about personal satisfaction in each area. In the above example the person might have said ‘I feel like my volunteering is great and I’m really enjoying it, so I’ll shade that one in full, but I am finding my social life boring and unfulfilling.’',
            'The perfect wheel should be balanced. Areas in which you have not shaded very much need some attention. If you do this exercise with your mentee/mentor, this would give you a good basis of which areas need focusing on and which you can work together on.',
            'To improve the balance of your wheel, and the balance of your life - you need to have a strategy of setting targets – see Smart Targets for guidance on this.',
            'The balance wheel can be completed as an initial assessment, then repeated following a period of time to observe progress and review targets.',
        ]
    },
    {
        id: 8,
        img: Pair5Img,
        title: "Ice Breakers",
        category: "Tips and Tools",
        snippet: 'The Balance Wheel is an adaptable mentoring tool which can help you to identify which areas you may wish to explore during your mentoring relationship, ',
        para1:`The Balance Wheel is an adaptable mentoring tool which can help you to identify which areas you may wish to explore during your mentoring relationship, and enables the identification and setting of goals. The eight 
                sections of the wheel represent balance or satisfaction. The more a section is shaded, the more level of satisfaction within that area of your life.`,
        list: [
            `Draw a circle and intersections and name each segment as an area of your life or study which is important to you.`,
            'Your areas may include study as well as socialising, family, volunteering or part time work. Or you might focus solely on study and look at specific elements of your course and University life, for example particular modules or planning for placement.',
            'Now shade out how satisfied or content you feel in each of these areas. This is not about how much time you spend on each, or how highly you achieve, it is about personal satisfaction in each area. In the above example the person might have said ‘I feel like my volunteering is great and I’m really enjoying it, so I’ll shade that one in full, but I am finding my social life boring and unfulfilling.’',
            'The perfect wheel should be balanced. Areas in which you have not shaded very much need some attention. If you do this exercise with your mentee/mentor, this would give you a good basis of which areas need focusing on and which you can work together on.',
            'To improve the balance of your wheel, and the balance of your life - you need to have a strategy of setting targets – see Smart Targets for guidance on this.',
            'The balance wheel can be completed as an initial assessment, then repeated following a period of time to observe progress and review targets.',
        ]
    },
  ]

export default function ResourcesPage() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState(null);
  
    function handleClickOpen(event, item) {
      event.persist();
      setProduct(item);
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
                <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Resources</Typography> 
            </div>
       
        <Grid container spacing={1} style={{marginLeft:"1%"}}>
            <Grid container spacing={1} justify="center">
            {resource.map(product => (
                <>
                {product.category === "Mentoring Guideline" ?
                    <Grid item xs={12} sm={3} key={product.id}>
                        <CardCustom
                            category={product.category}
                            snippet={product.snippet}
                            title={product.title}
                            img={product.img}
                            handleClick={event => handleClickOpen(event, product)}
                            colour={'#83008F'}
                        />
                    </Grid>
                    :
                    product.category === "Blog" ?
                    <Grid item xs={12} sm={3} key={product.id}>
                        <CardCustom
                            category={product.category}
                            snippet={product.snippet}
                            title={product.title}
                            img={product.img}
                            handleClick={event => handleClickOpen(event, product)}
                            colour={'#087FD8'}
                        />
                    </Grid>
                    :
                    <Grid item xs={12} sm={3} key={product.id}>
                    <CardCustom
                        category={product.category}
                        snippet={product.snippet}
                        title={product.title}
                        img={product.img}
                        handleClick={event => handleClickOpen(event, product)}
                        colour={'#FF9505'}
                    />
                </Grid>
                }

                </>
            ))}
            </Grid>
            {open && product && (
                <DialogCustom
                    keyID={product.id}
                    onClickOpen={open}
                    ref={descriptionElementRef}
                    onClickClose={handleClose}
                    title={product.title}
                >
                    <div style={{marginBottom:'2%'}}>
                        <Typography variant={'h5'}>{product.subTitle1}</Typography>
                    </div>
                    <div style={{marginBottom:'2%'}}>
                        <Typography>{product.para1}</Typography>
                    </div>
                    <div style={{marginBottom:'2%'}}>
                        <Typography>{product.para2}</Typography>
                    </div>
                    <div style={{marginBottom:'4%'}}>
                        <Typography>{product.para3}</Typography>
                    </div>
                    <img src={product.img2} style={{width: "40%"}} />
                    <img src={product.img3} style={{width: "40%"}} />
                    <Typography variant={'h5'} style={{marginBottom:'2%'}}>{product.subTitle}</Typography>
                    {product.list && product.list.map(product => (
                        <li style={{marginBottom:'2%'}}>{product}</li>
                    ))}
                </DialogCustom>
            )}
      </Grid>
      </React.Fragment>
    );
  }