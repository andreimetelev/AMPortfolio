import React from "react";
import { useState } from "react/cjs/react.development";
import MyBtn from "../UI/button/MyBtn";
import MyInput from "../UI/input/MyInput";


const WorkForm = ({subjoin}) => {
    const [card, setCard] = useState({start: '', ending: '', title: '', body: ''})

    const addNewWork = (e) => {
        e.preventDefault()
        const newWork = {
            ...card, id: Date.now()
        }
        subjoin(newWork)
        setCard({start: '', ending: '', title: '', body: ''})
    }

    return (
        <form className="form">
        <MyInput 
         value={card.start}
         onChange={e => setCard( {...card, start: e.target.value})}
         type="date" 
         placeholder="Start"/>

         <MyInput value={card.ending}
        onChange={e => setCard( {...card, ending: e.target.value})}
         type="date" 
         placeholder="Ending"/>

         <MyInput value={card.title}
         onChange={e => setCard( {...card, title: e.target.value})}
         type="text" 
         placeholder="Title"/>

         <MyInput value={card.body}
         onChange={e => setCard( {...card, body: e.target.value})}
         type="text" 
         placeholder="Body"/>

         <MyBtn onClick={addNewWork}>Add work</MyBtn>
     </form>

    );
};

export default WorkForm;