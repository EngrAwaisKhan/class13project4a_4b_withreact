import React, {useEffect, useRef} from 'react';

function InputField(){
    const element1 = useRef(null);

    useEffect(() => {
      element1.current.focus();
    },[]);
return(
    <div>
      <label>UserName/Email:</label>
      <input  ref={element1} type="text"/>
    </div>
)
}

export default InputField;