import React from 'react';
import classes from "../resume/Resume.module.css";
import ResumeLeftPart from './ResumeLeftPart';
import ResumeRightPart from './ResumeRightPart';
import ResumeItem from './ResumeItem';

const Resume = (props) => {
    return (
        <div className={classes.resumeBody} {...props} >
        <ResumeLeftPart>

        <ResumeItem RItem={{chapter:'Contact details',title:'', desc:'Phone: +79263113911 www.linkedin.cn/in/andreimetelev mail:joultiy@gmail.com'}}/>

        <ResumeItem RItem={{chapter:'Education', title:'2019-present time', desc:'Independent study of programming, application of knowledge in your own projects'}}/>

        <ResumeItem RItem={{chapter:'Interests',title:'',desc:''}}/>

        <img className={classes.hobbyImg} src="./images/hobby-icon/cooking.png" alt="6"/>
            <img className={classes.hobbyImg} src="./images/hobby-icon/roller-skate.png" alt="7"/>
            <img className={classes.hobbyImg} src="./images/hobby-icon/read-books.png" alt="8"/>
            <img className={classes.hobbyImg} src="./images/hobby-icon/meeting-with-a-friend.png" alt="9"/>
            <img className={classes.hobbyImg} src="./images/hobby-icon/travel.png" alt="10"/>

        </ResumeLeftPart>
       
        <ResumeRightPart>
        <ResumeItem RItem={{chapter:'Skills', title:'', desc:'Communication skills, responsibility, attentiveness, result orientation, analytical mindset, ability to work in a team, ability to learn quickly, high efficiency self management, team work. English language A-2.'}}/>
        <ResumeItem RItem={{chapter:'HTML',title:'Basics', desc:'Semantic, Accessibility, Validation'}}/>
        <ResumeItem RItem={{chapter:'CSS',title:'Basics', desc:'Flexbox, MediaQueries'}}/>
        <ResumeItem RItem={{chapter:'', title:'Preprocessors', desc:'Less'}}/>
        <ResumeItem RItem={{chapter:'', title:'Frameworks', desc:'Materialize'}}/>
        <ResumeItem RItem={{chapter:'Tools', title:'Basics', desc:'Git, GitHub'}}/>
        <ResumeItem RItem={{chapter:'JavaScript', title:'Basics', desc:'JS Patterns, Data Structures, Algorithms, Big O Notation'}}/>
        <ResumeItem RItem={{chapter:'Front-end', title:'Frameworks', desc:'React'}}/>
        {/* <ResumeItem RItem={{chapter:'', title:'State Management', desc:'Redux'}}/> */}
        </ResumeRightPart>

        </div>
    );
};

export default Resume;