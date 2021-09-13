import React from 'react';
import classes from "../resume/Resume.module.css";
import ResumeLeftPart from './ResumeLeftPart';
import ResumeRightPart from './ResumeRightPart';
import ResumeItem from './ResumeItem';

const Resume = (props) => {
    return (
        <div className={classes.resumeBody} {...props} >
        <ResumeLeftPart>
        <ResumeItem ritem={{chapter:'Profile', title:'', desc:"Hi, I'm Andrey Metelev Front-end developer. In 2021, I got carried away by studying programming and web application development. The programming world is huge, and I have become, albeit small, but a part of this world. I have worked in different companies and in different positions. In my work, I have always completed the assigned tasks with high quality and on time. I'm not afraid to take responsibility. I like to do interesting and challenging tasks. I quickly learn new things and put them into practice. I am learning the basics of web development on my own. I'm also developing along the path of a React developer."}}/>
        <ResumeItem ritem={{chapter:'Contact details',title:'', desc:'Phone: +79263113911 www.linkedin.cn/in/andreimetelev mail:joultiy@gmail.com'}}/>
        <ResumeItem ritem={{chapter:'Education', title:'2019-present time', desc:'Independent study of programming, application of knowledge in your own projects'}}/>

        <ResumeItem ritem={{chapter:'Interests',title:'',desc:''}}/>

        <img className={classes.hobbyImg} src="./images/hobby-icon/cooking.png" alt="6"/>
            <img className={classes.hobbyImg} src="./images/hobby-icon/roller-skate.png" alt="7"/>
            <img className={classes.hobbyImg} src="./images/hobby-icon/read-books.png" alt="8"/>
            <img className={classes.hobbyImg} src="./images/hobby-icon/meeting-with-a-friend.png" alt="9"/>
            <img className={classes.hobbyImg} src="./images/hobby-icon/travel.png" alt="10"/>

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