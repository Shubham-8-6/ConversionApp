import React,{useState} from 'react'

export default function TextForm (props) {

  const handleupClick =()=>{
    // console.log('uppercase was clicked' + text)
    let newText = text.toUpperCase();
    settext(newText)
    props.showAlert('Converted to upperCase', 'primary');
  };

  const handleonChange =(event)=>{
    // console.log('on change')
    settext(event.target.value)
  };

const handlelowClick =()=>{

  let newText =text.toLowerCase();
  settext(newText)
  props.showAlert('Converted to lowerCase', 'success');

}

const handleClear =()=>{

  let newText =('');
  settext(newText)
  props.showAlert('TextBox Empty', 'danger');
}


const Speak =()=>{

let nsg = new SpeechSynthesisUtterance();
nsg.text = text;
window.speechSynthesis.speak(nsg);
props.showAlert('Speak text on', 'info');
}

 const [text, settext] = useState('')
 
  // text = 'new text'; // wrong way to change the state
  // settext('new text'); //correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonChange} 
  style={{backgroundColor: props.mode==='dark'?'grey':'white',cursor:'pointer'
  ,color:props.mode==='dark'?'white':'#042743'}} 
  id="Box" rows="8"></textarea>
</div> 
<button className='btn btn-primary mx-2 my-2' onClick={handleupClick}>Convert to uppercase</button> 
<button className='btn btn-success mx-2 my-2'onClick={handlelowClick}>Convert to lowercase</button> 
<button className='btn btn-danger mx-2 my-2' onClick={handleClear}>Clear Text</button> 
<button className='btn btn-info mx-2 my-2'onClick={Speak}>speak</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(' ').length} minutes read</p>
  <h2 >preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
    </>
  )
}
