import React, {useState} from 'react'

export default function TextForm(props) {
  const [text , setText ]=useState('');
  
  const UpClick = ()=>{
    console.log("Uppercase was clicked" +text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert('converted to uppercase','Success');
  }
  const downClick = ()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert('converted to Lowercase','Success');
  }
  const handleOnChange   = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const copyText=()=>{
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied','Success');
  }
  const clearText=()=>{
    setText("");
  }
  //setText("Neww text");
return (
  <>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<div className="mb-3">
<h1>{props.heading}</h1>
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
<button className="btn btn-primary my-3 mx-2" onClick={UpClick}>Convert to Upper case</button>
<button className="btn btn-primary my-3 mx-2" onClick={downClick}>Convert To Lower Case</button>
<button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear Text</button>
<button className="btn btn-primary my-3 mx-2" onClick={copyText}>Copy Text</button>
</div>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>Your Text summery</h1>
  <p>{text.split(" ").length-1} words and {text.length} characters</p>
</div>
</>
)
}
