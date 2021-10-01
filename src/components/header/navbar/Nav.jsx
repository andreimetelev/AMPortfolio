import React, {useState} from 'react';
import classes from "../Header.module.css";
import MyBtn from '../../UI/button/MyBtn';
import Modal from "../../UI/modal/Modal";
import Resume from "../../resume/Resume";
import Contact from '../../contact/Contact';
import { Link } from 'react-router-dom';


const Nav = (props) => {
  const [resume, setResume] = useState(false);
  const [contact, setContact] = useState(false);
    return (
      <div className={classes.nav} {...props} >
          <Link className={classes.navbar__link} to="/main">Main Page</Link>
          <MyBtn onClick={() => setResume(true)}> My Resume</MyBtn>
          <Modal visible={resume} setVisible={setResume}>
          <Resume/>
          <MyBtn onClick={() => setResume(false)}>Close</MyBtn>
          </Modal>
          <MyBtn onClick={() => setContact(true)}>Contact</MyBtn>
          <Modal visible={contact} setVisible={setContact}>
            <Contact/>
            <MyBtn onClick={() => setContact(false)}>Close</MyBtn>
          </Modal>
      </div>
    );
};

export default Nav;