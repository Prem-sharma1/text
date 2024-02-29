import React, {useState} from 'react'
export default function Textform(props) {
  
    const [text, setText] = useState('Enter text here');
    const handleUpClick=()=>{
console.log("uppercase wa clicked",+text);
let newText=text.toUpperCase();
setText(newText)
props.showAlert("converted to uppercase","success")
    }
  const handlelowClick=()=>{
console.log("lower case was clicked"+text);
let newText=text.toLowerCase();
setText(newText)
props.showAlert("converted to lower","success")
  }
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
        }
        const handleClearClick=()=>{
        //  console.log(" ");
          let newText=('');
          setText(newText)
            }
            const handleCopy=()=>{
              var text=document.getElementById("myBox");
              text.select();
              text.setSelectionRange(0,9999);
              navigator.clipboard.writeText(text.value);
              props.showAlert("copy text successsfully","success")
            }
            const handleExtraSpaces=()=>{
              let newText=text.split(/[ ]+/);
              setText(newText.join(" "))
              props.showAlert("they join the extra spaces","success")
            }
    //text="my text"//wrong way to uasng state
    //setText("new Text")//right way to using state
  return(
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}id="myBox"  rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>convert to Lower</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>CLear text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>remveextraspace</button>
  </div>
  <div className="container my-3"style={{color: props.mode==='light'?'black':'white'}}>
    <h2>your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} words and {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"nothing to preview"}</p>
  </div>
 </>
  )
}