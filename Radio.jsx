import React , {useState} from "react";

 function Radio() {
    const [value ,setValue] = useState(1);

    function changeValue(event){
        setValue(event.target.value)
    }

    return(
        <div>
            <h2>ppppppppppppp</h2>
           <p><input type ="radio" name = "radio" value = "1"/></p> 
        </div>
    )
}
export default Radio;