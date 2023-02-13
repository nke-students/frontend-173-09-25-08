import React, {useState} from 'react';

function CheckBoxx(){
    const [checked,setChecked] = useState(true);


    let msg;
    if(checked){
        msg = <span>......</span>
    }else{
        msg =<span> gggg</span>
    }
    return <div>
        <h2>********</h2>
        <input type ="checkbox" checked ={checked} onChange={() => setChecked(!cheked)}/>
        <span>{msg}</span>
    </div>;
}
export default CheckBoxx;