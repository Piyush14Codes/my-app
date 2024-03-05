import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Upper Case","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleOnClick = ()=>{
        setText('');
    }
    const [text,setText] = useState('Enter Text Here');
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Lower Case","success");
        
    }
    const handleClear = () =>{
        setText('');
        props.showAlert("Text Cleared","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard","success");
    }
  return (

    <>
        <h1 style={{color: props.mode === 'dark'||props.mode === 'danger'||props.mode === 'success'? 'white' : '#212529'}} className='my-3'>{props.heading}</h1>
        <div className="mb-3" style={{color: props.mode === 'dark'||props.mode === 'danger'||props.mode === 'success'? 'white' : '#212529'}}>
        <label for="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control my-2" id="myBox" rows="3" value = {text} onClick={handleOnClick} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#212529' : 'white',color: props.mode === 'dark'||props.mode === 'danger'||props.mode === 'success'? 'white' : '#212529'}} ></textarea>
        <button disabled ={text.length === 0} className="btn btn-primary my-1 mx-3" onClick={handleUpClick} >Convert To Uppercase</button>
        <button disabled ={text.length === 0} className="btn btn-primary my-1 mx-3" onClick={handleLoClick} >Convert To Lowercase</button>
        <button disabled ={text.length === 0} className="btn btn-primary my-1 mx-3" onClick={handleClear} >Clear</button>
        <button disabled ={text.length === 0} className="btn btn-primary my-1 mx-3" onClick={handleCopy} >Copy Text</button>
        {/* <button className="btn btn-primary my-3 mx-3" onClick={handleClear} >Clear</button> */}
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'||props.mode === 'danger'||props.mode === 'success'? 'white' : '#212529'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Write Something to Preview"}</p>
    </div>
    </>
  )
}