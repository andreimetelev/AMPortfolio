import React from 'react';
import classes from "../circle/Circle.module.css";

const Circle = (props) => {
    return (
            <circle className={classes.a__circle} {...props}>
                <circle className={classes.b__circle}>
                <circle className={classes.c__circle}>
                <circle className={classes.d__circle}>
                <img src="" alt/>
                </circle>
                </circle>
                </circle>
            </circle>
    );
};

export default Circle;