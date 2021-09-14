import React from 'react';
import classes from "../footer/Footer.module.css";
import logo1 from "../../images/footerSocial/github-sign.png";
import logo2 from "../../images/footerSocial/linkedin.png";
import logo3 from "../../images/footerSocial/telegram.png";

const Footer = (props) => {
    return (
        <div className={classes.footer} {...props}>
            <footer className={classes.intro}>
                <div className={classes.footer__inner}>
            <div className={classes.footer__content}>
                <div className={classes.footer__copyright}>Andrei Metelev 2021</div>
                <div className={classes.footer__social}>
                    <button className={classes.footer__social__a} href="#" target='_blank'><img className={classes.footer__social__img} src={logo1} alt="logo1" width="18"/></button>
                    <button className={classes.footer__social__a} href="#" target='_blank'><img className={classes.footer__social__img} src={logo2} alt="logo2" width="18"/></button>
                    <button className={classes.footer__social__a} href="#" target='_blank'><img className={classes.footer__social__img} src={logo3} alt="logo3" width="18"/></button>
                </div>
            </div>
            <nav className={classes.footer__nav}>
            <button className={classes.footer__nav__link__btn} href="#">Main Page</button>
            <button className={classes.footer__nav__link__btn} href="#">About Me</button>
            <button className={classes.footer__nav__link__btn} href="#">Work</button>
            <button className={classes.footer__nav__link__btn} href="#">Contact</button>
            </nav>
            </div>
            </footer>
        </div>
        );
    };

export default Footer;