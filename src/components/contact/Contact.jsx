import React from 'react';
import classes from "../contact/Contact.module.css";
import MyInput from '../UI/input/MyInput';
import MyBtn from '../UI/button/MyBtn';
import ContactImg from '../../image/contacts/777.jpg';
import Myphone from '../../image/contacts/phone-call.png';
import Mymail from '../../image/contacts/email.png';

const Contact = (props) => {
 
    return (
      <div {...props} >
        <div className={classes.contact}>
            <div className={classes.contact__left}>
                <div className={classes.contact__title}>
                <h1>Contact</h1> 
                <h3>Write to me</h3>  
                </div> 
                <ul className={classes.contact__info}>
                  <li className={classes.contact__item}>
                    <img className={classes.contact__icon} src={Myphone} alt="phoneIcon"/>
                    +79263113911</li>
                  <li className={classes.contact__item}>
                  <img className={classes.contact__icon} src={Mymail} alt="mailIcon"/>
                    joultiy@gmail.com</li>
                </ul>
                <form className={classes.contact__form} action="/" method='post'>
                  <label className={classes.contact__label} for="input-email">Adress e-mail</label>
                  <MyInput name="input-email" type="text" id='input-email' placeholder="Adress e-mail"/>
                </form>
                <form  className={classes.contact__form} action="/" method='post'>
                  <label className={classes.contact__label} for="input-text">Request</label>
                  <textarea className={classes.contact__textarea} name="input-text" id="input-text" placeholder="Type your request"></textarea>
                </form>
                <div className={classes.contact__textRight}>
                <MyBtn>SEND</MyBtn>
                </div>
            </div>
            <div className={classes.contact__right}>
            <div className={classes.contact__photo}>
              <img className={classes.contact__img} src={ContactImg} alt='contactImg' />
            </div>
            </div>
        </div>
      </div>
    );
};

export default Contact;