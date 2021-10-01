import React, { useMemo, useState } from "react";
import classes from "../pages/PagesStyles.module.css";
import BgImg from "../image/bg/work/1.jpg";
import work1 from "../image/work/w1.png";
import work2 from "../image/work/w2.png";
import work3 from "../image/work/w3.png";
import work4 from "../image/work/w4.png";
import WorksList from '../components/work/WorksList';
import MyBtn from "../components/UI/button/MyBtn";
import WorkForm from "../components/work/WorkForm";
import WorkFilter from "../components/work/WorkFilter";
import Modal from "../components/UI/modal/Modal";
import PageTitle from "../components/pageTitle/PageTitle";
       
function Work() {
    const [works, setWorks] = useState ([
        {img:work1, id:1, start:'2001-08', ending:"2008-10", title:'Engine repair specialist ', body:'Repair and maintenance of engines of heavy vehicles'},
        {img:work2, id:2, start:'2008-10', ending:"2009-07", title:'Engine repair specialist', body:'Car engine repair and maintenance'},
        {img:work3, id:3, start:'2009-08', ending:"2010-06", title:'Compressor repair specialist', body:'Repair and maintenance of engines and compressors of refrigeration units'},
        {img:work4, id:4, start:'2010-09', ending:"2013-03", title:'Сar repair specialist', body:'Maintenance and repair of Audi cars'},
        {img:work1, id:5, start:'2013-04', ending:"2014-09", title:'Leading specialist of a bank branch', body:'Work in a bank branch'},
        {img:work2, id:6, start:'2014-09', ending:"2015-05", title:'Bank card specialist', body:'Working with bank cards'},
        {img:work3, id:7, start:'2015-05', ending:"2017-04", title:'Payroll Projects Manager', body:'Working with organizations on the issue of salary projects'},
        {img:work4, id:8, start:'2017-06', ending:"2021-08", title:'Accountant', body:'Working as an accountant in a private company'},
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
            <PageTitle page = {{title:'Work', objective:'This page provides information about my previous experience in the form of cards.You can sort them and use the search. You can also hide them and add cards with information about your work experience.'}}/>
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