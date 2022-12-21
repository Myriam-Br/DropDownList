import React from "react";
import PropTypes from 'prop-types';

function DropDownList({name, label, id, list, onChange, title}){ 
  return ( <div className= 'dropdown'>
    <label htmlFor={id}>{title}</label>
    <select defaultValue={'DEFAULT'} id={id} onChange={onChange}>
        <option value="DEFAULT" disabled>Select a {label}</option>
        {list.map((option, index) => {
          return <option key={index} >{option[name]}</option>
        })}    
    </select>  
  </div>
)};

DropDownList.protoType = {
  name : PropTypes.string,
  label : PropTypes.string,
  id : PropTypes.string,
  list : PropTypes.array,
  onChange : PropTypes.func
}

export default DropDownList;