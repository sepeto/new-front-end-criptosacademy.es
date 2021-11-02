import React from "react";

import { MdFilterAlt, MdListAlt } from 'react-icons/md';
import FilterItem from "./FilterItem";

import '../../styles/components/filter.css';

function Filter() {
    return (
        <div className="filter">
            <div className="search">
                <input type="text" id="search-input" placeholder="Search..." />
                <label className="search-label" htmlFor="search-input">Search</label>
            </div>
            <div className="filter-group">
                <span className="title-filter"> 
                    <span className="icon-filter">< MdFilterAlt /></span> 
                    Filters
                </span>
                <FilterItem title={"Business"} />
                <FilterItem title={"Currency"} />
            </div>
            <div className="filter-group filter-group-two">
                <span className="title-filter title-filter-second"> 
                    <span className="icon-filter">< MdListAlt /></span> 
                    Order
                </span>
                <FilterItem title={"Order By"} />
            </div>  
        </div>
    );
};

export default Filter;