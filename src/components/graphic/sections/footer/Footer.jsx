import React from 'react';
import classes from "../footer/Footer.module.css";


const Footer = (props) => {
    return (
        <div className={classes.footer} {...props}>
            <footer className={classes.intro}>
                <div className={classes.footer__inner}>
            <div className={classes.footer__info}>
                <div className={classes.footer__copyright}>Andrei Metelev 2021</div>
                <div className={classes.footer__social}>
                    <button className={classes.footer__social__a} href="#" target='_blank'><img className={classes.footer__social__img} src="./images/footerSocial/linkedin.png" width="18" alt="3"/></button>
                    <button className={classes.footer__social__a} href="#" target='_blank'><img className={classes.footer__social__img} src="./images/footerSocial/github-sign.png" width="18" alt="4"/></button>
                    <button className={classes.footer__social__a} href="#" target='_blank'><img className={classes.footer__social__img} src="./images/footerSocial/telegram.png" width="18" alt="5"/></button>
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