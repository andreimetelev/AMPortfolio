import React from 'react';
import classes from "../resume/Resume.module.css";
import ResumeLeftPart from './ResumeLeftPart';
import ResumeRightPart from './ResumeRightPart';
import ResumeItem from './ResumeItem';
import icon1 from "../../image/hobby-icon/cooking.png";
import icon2 from "../../image/hobby-icon/meeting-with-a-friend.png";
import icon3 from "../../image/hobby-icon/read-books.png";
import icon4 from "../../image/hobby-icon/roller-skate.png";
import icon5 from "../../image/hobby-icon/travel.png";


const Resume = (props) => {
    return (
        <div className={classes.resumeBody} {...props} >
        <ResumeLeftPart>
        <ResumeItem ritem={{chapter:'Profile', title:'', desc:"Hi, I'm Andrey Metelev Front-end developer. In 2021, I got carried away by studying programming and web application development. The programming world is huge, and I have become, albeit small, but a part of this world. I have worked in different companies and in different positions. In my work, I always completed the assigned tasks with high quality and on time, i am not afraid to take responsibility, i like to do interesting and challenging tasks. I quickly learn new things and put them into practice. I am learning the of web development on my own, developing along the path of a React developer."}}/>
        <ResumeItem ritem={{chapter:'Contact details', title: '', desc: 'joultiy@gmail.com'}}/>
        <ResumeItem ritem={{chapter:'Education', title:'2019-present time', desc:'Independent study of programming, application of knowledge in your own projects'}}/>

        <ResumeItem ritem={{chapter:'Interests',title:'',desc:''}}/>
        <div className={classes.resumeHobby}>
        <img className={classes.hobbyImg} src={icon1} alt="icon1"/>
        <img className={classes.hobbyImg} src={icon2} alt="icon2"/>
        <img className={classes.hobbyImg} src={icon3} alt="icon3"/>
        <img className={classes.hobbyImg} src={icon4} alt="icon4"/>
        <img className={classes.hobbyImg} src={icon5} alt="icon5"/>
        </div>
        </ResumeLeftPart>
       
        <ResumeRightPart>
        <ResumeItem ritem={{chapter:'Skills', title:'', desc:'Communication skills, responsibility, attentiveness, result orientation, analytical mindset, ability to work in a team, ability to learn quickly, high efficiency self management, team work. English language A-2.'}}/>
        <ResumeItem ritem={{chapter:'HTML',title:'Basics', desc:'Semantic, Accessibility, Validation'}}/>
        <ResumeItem ritem={{chapter:'CSS',title:'Basics', desc:'Flexbox, MediaQueries'}}/>
        <ResumeItem ritem={{chapter:'', title:'Preprocessors', desc:'Less'}}/>
        {/* <ResumeItem RItem={{chapter:'', title:'Frameworks', desc:'Materialize'}}/> */}
        <ResumeItem ritem={{chapter:'Tools', title:'Basics', desc:'Git, GitHub'}}/>
        <ResumeItem ritem={{chapter:'JavaScript', title:'Basics', desc:'JS Patterns, Data Structures, Algorithms, Big O Notation'}}/>
        <ResumeItem ritem={{chapter:'Front-end', title:'Frameworks', desc:'React'}}/>
        {/* <ResumeItem RItem={{chapter:'', title:'State Management', desc:'Redux'}}/> */}
        </ResumeRightPart>

        </div>
    );
};

export default Resume;