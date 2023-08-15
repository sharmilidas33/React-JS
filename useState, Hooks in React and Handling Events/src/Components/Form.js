import React, {useState} from 'react'

export default function Form(props) {
    const clickUpper=()=>{
        console.log("Uppercase was clicked "+ text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const clickLower=()=>{
        console.log("LowerCase was clicked "+text);
        let newText = text.toLowerCase() ;
        setText(newText);
    }
    const handleOnchange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    //React Hooks
    const [text, setText] = useState("Enter Text here");  
    
    return (
        <div>
            <h4>{props.heading} </h4>
            <div className="mb-3">   
            <textarea className="form-control" value={text} onChange={handleOnchange} id="textArea" rows="10"></textarea>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-outline-success mr-1" onClick={clickUpper} > Convert to Uppercase</button>
            <button type="button" className="btn btn-outline-info"onClick={clickLower}>Convert to LowerCase</button>
            </div>
        </div>
    )
}
