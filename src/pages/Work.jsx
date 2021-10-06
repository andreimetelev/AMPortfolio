import React, { useMemo, useState } from "react";
import classes from "../pages/PagesStyles.module.css";
import BgImg from "../image/bg/work/1.jpg";
import WorksList from '../components/work/WorksList';
import MyBtn from "../components/UI/button/MyBtn";
import WorkForm from "../components/work/WorkForm";
import WorkFilter from "../components/work/WorkFilter";
import Modal from "../components/UI/modal/Modal";
  
function Work() {
    const [works, setWorks] = useState ([
        {id:1, start:'2001-08', ending:"2008-10", title:'Engine repair specialist ', description:'Repair and maintenance of engines of heavy vehicles'},
        {id:2, start:'2008-10', ending:"2009-07", title:'Engine repair specialist', description:'Car engine repair and maintenance'},
        {id:3, start:'2009-08', ending:"2010-06", title:'Compressor repair specialist', description:'Repair and maintenance of engines and compressors of refrigeration units'},
        {id:4, start:'2010-09', ending:"2013-03", title:'Сar repair specialist', description:'Maintenance and repair of Audi cars'},
        {id:5, start:'2013-04', ending:"2014-09", title:'Leading specialist of a bank branch', description:'Work in a bank branch'},
        {id:6, start:'2014-09', ending:"2015-05", title:'Bank card specialist', description:'Working with bank cards'},
        {id:7, start:'2015-05', ending:"2017-04", title:'Payroll Projects Manager', description:'Working with organizations on the issue of salary projects'},
        {id:8, start:'2017-06', ending:"2021-08", title:'Accountant', description:'Working as an accountant in a private company'},
    ])
    
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedWorks = useMemo(() => {
        if(filter.sort) {
            return [...works].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return works;
    }, [filter.sort, works])

    const sortedFoundWorkCards = useMemo(() => {
        return sortedWorks.filter(work => work.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedWorks])

    const subjoinWork = (newWork) => {
        setWorks([...works, newWork])
    }

    const hideWork = (work) => {
        setWorks(works.filter(w => w.id !== work.id))
    }

    const [addWork, setAddWork] = useState(false);

    return (
    <div className={classes.work__page}>
        <div>
            <div className={classes.page__bg__img} style={{backgroundImage: `url(${BgImg})` }}></div>
            <div className={classes.work__page__description}>
            <h3>This page provides information about my previous experience in the form of cards.You can sort them and use the search. You can also hide them and add cards with information about your work experience.</h3>
            </div>
            
        </div>
        <div className={classes.work__box}>
        <WorkFilter
            filter={filter}
            setFilter={setFilter}
        />
        <button  className={classes.work__add__btn} onClick={() => setAddWork(true)}>Add new WorkCard</button>
        </div>
        <Modal visible={addWork} setVisible={setAddWork}>
        <WorkForm subjoin={subjoinWork}/>
        <MyBtn onClick={() => setAddWork(false)}>Close</MyBtn>
        </Modal>
        <WorksList hide={hideWork} works={sortedFoundWorkCards} title="Total work experience"/>
    </div>
  );
}

export default Work;