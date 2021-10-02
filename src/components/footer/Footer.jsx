import React, {useState} from 'react';
import classes from "../footer/Footer.module.css";
import logo1 from "../../image/footerSocial/github-sign.png";
import logo2 from "../../image/footerSocial/linkedin.png";
import logo3 from "../../image/footerSocial/telegram.png";
import Modal from "../UI/modal/Modal";
import Contact from '../contact/Contact';
import { Link } from 'react-router-dom';
import MyBtn from '../UI/button/MyBtn';

const Footer = (props) => {
    const [contact, setContact] = useState(false);
    return (
            <footer className={classes.footer} {...props}>
                <div className={classes.footer__copyright}>
                    Andrei Metelev 2021
                    <div className={classes.footer__social}>
                    <button className={classes.footer__social__a} href="#" target='_blank'>
                        <img className={classes.footer__social__img} src={logo1} alt="logo1" width="18"/>
                        </button>
                    <button className={classes.footer__social__a} href="#" target='_blank'>
                        <img className={classes.footer__social__img} src={logo2} alt="logo2" width="18"/>
                        </button>
                    <button className={classes.footer__social__a} href="#" target='_blank'>
                        <img className={classes.footer__social__img} src={logo3} alt="logo3" width="18"/>
                        </button>
                    </div>
                </div>
                <div className={classes.footer__nav}>
                <Link className={classes.footer__nav__link} to="/mainPage">Main Page</Link>
                <MyBtn className={classes.footer__nav__link} href="#" onClick={() => setContact(true)}>Contact</MyBtn>
                <Modal visible={contact} setVisible={setContact}>
                <Contact/>
                </Modal>
                </div>
            </footer>
        );
    };

export default Footer;