import React,{useState} from "react";

function Select (){
    const [value,setValue]= useState('');
    const options = arOptions.map((text,index) => {
        return<option key ={index}>{text}</option>;
    });


return <div>
    <h2>##############</h2>
    <select value={value} onChange = {(event) => setValue(event.target.value)}>{options}</select>
    <p>,,,,,,,,,,,,,{value}~</p>
</div>;
}
export default Select;