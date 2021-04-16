import TeamworkImg from '../../Images/pair1.jpg';
import CodingImg from '../../Images/pair2.jpg';
import SocialInteractionImg from '../../Images/individual1.jpg';
import WorkImg from '../../Images/pair3.jpg';
import Wheel1Img from '../../Images/balanceWheel.jpg';
import Wheel2Img from '../../Images/balanceWheel2.jpg';
import Pair13Img from '../../Images/pair13Mask.jpg';
import Pair13bImg from '../../Images/pair13bMask.jpg';
import Pair14Img from '../../Images/pair14.jpg';
import Pair18Img from '../../Images/pair18.jpg';
import Pair5Img from '../../Images/pair5.jpg';

export default {
    Home: {
        Header: {
            text1: 
            'Peer Mentoring is a voluntary scheme which is flexible, confidential, and fits around your availability and preferences. Training, resources and ongoing support are provided by our dedicated team. Your participation will be reflected on your HEAR, your Aston student record and will be valuable for any future placement or job applications. You will also receive a certificate and be invited to our Awards Evening at which we present awards for Mentor and Mentee of the Year.',
            text2:
            'Improve communication and personal skills.',
            text3:
            'Develop leadership and management qualities Reinforce your study skills and knowledge of your course.',
            text4:
            'Reinforce your study skills and knowledge of your course.',
            text5:
            'Gain practical advice, encouragement and support.',
            text6:
            'Learn from the experiences of others.',
            text7:
            'Increase your social and academic confidence.',
            text8:
            'Develop strategies for dealing with both personal and academic issues.',
            text9:
            'Peer mentoring is an opportunity to meet new people, share experiences and knowledge, and develop transferable skills that will increase your employability.',
            text10:
            'Whether you are looking for a match that is the same gender, ethnicity or even a mentor that has completed a placement. The choice is yours! You choose the criteria you would like to be matched on!',
            text11:
            'Grow your network and enhance your university experience!',
        },
        steps: {
            one: 'Register and create a profile to help us find your perfect match.',
            two: 'View our resources and begin training whilst we find your match.',
            three: 'View your match(es) profile and confirm your match(es)!',
            four: 'Start mentoring! Introduce yourself to your match and get mentoring.'
        
        },
        Messages: {
        
        },
        Goals: {
        
        },
        Calendar: {
        
        },
        Resources: {
        
        },
        
    },
    Testimonials: {
        slider: {
            one: 'Denisa & Oana - Transition Mentor and Mentee',
            one2: 'Aston University Students, Denisa and Oana talk about their experiences of the University Peer Mentoring Scheme. ',
            two: 'Ashraf - Transition Mentor',
            two2: 'Aston University Student, Ashraf talks about his experiences of the University Peer Mentoring Scheme.',
            three: 'Christina - Placement Mentor',
            three2: 'Aston University Student, Christina talks about her experiences of the University Peer Mentoring Scheme.',
            four: 'Laurence - Pre-arrival E-mentor & Transition Mentor',
            four2: `Laurence, a Computing for Business student, talks about his experience mentoring a student as part of Aston University's Peer Mentoring scheme.`,

        }
    },
}

export const RESOURCES =[
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

// export default Resources = {
//     resource =[
//     {
//       Title: "Computer Science",
//       category: "Mentoring",
//       snippet: 'Aston University Student, Ashraf talks about his experiences of the University Peer Mentoring Scheme',
//       content: `Cras mattis consectetur purus sit amet fermentum.
//                 Cras justo odio, dapibus ac facilisis in, egestas eget quam.
//                 Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
//     },
//     {
//         Title: "Exam Prep",
//         category: "Study Tips",
//         snippet: 'Aston University Student, Ashraf talks about his experiences of the University Peer Mentoring Scheme',
//         content: `Cras mattis consectetur purus sit amet fermentum.
//                   Cras justo odio, dapibus ac facilisis in, egestas eget quam.
//                   Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//                   Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
//     },
//   ]
// }

