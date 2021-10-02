import React from "react";
import classes from "../work/WorkItem.module.css";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const WorkFilter  = ({filter, setFilter}) => {
    return (
        <div className={classes.work__search__and__sort}>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search...'    
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defautlValue='Sorting'
                options={[
                    {value:'start', name: 'Beginning of work'},
                    {value:'title', name: 'Profession'}
                ]}
            />
        </div>
    );
};

export default WorkFilter;