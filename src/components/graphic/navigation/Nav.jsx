import React, {useState} from 'react';
import classes from "../navigation/Header.module.css";
import MyBtn from '../../UI/button/MyBtn';
import Modal from "../../UI/modal/Modal";
import Resume from "../resume/Resume";

const Nav = (props) => {
  const [resume, setResume] = useState(false);
  const [contact, setContact] = useState(false);
    return (
      <div className={classes.nav} {...props} >
          <MyBtn>About Me</MyBtn>
          <MyBtn>Work</MyBtn>
          <MyBtn onClick={() => setResume(true)}>My Resume</MyBtn>
          <Modal visible={resume} setVisible={setResume}>
          <Resume/>
          </Modal>
          <MyBtn onClick={() => setContact(true)}>Contact</MyBtn>
          <Modal visible={contact} setVisible={setContact}></Modal>
      </div>
    );
};

export default Nav;