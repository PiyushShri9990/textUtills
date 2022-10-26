import React, {useState} from 'react'


export default function TextForm(props) {
    const handelUpClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper-Case!", "success");
    }
    const handelLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower-Case!", "success");
    }
    const handelClickClear = ()=>{
        let newText = ''
        setText(newText)
        props.showAlert("All Clear!", "success");
    }
    const handelOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const handelCopy = ()=>{
        var text= document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Convertion Copied!", "success");
    }
    const handelSpace = (event)=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Space hase been removed!", "success");
    }
    

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'#1a1a38':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
            </div>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelUpClick}>Convert to UpperCase</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelLoClick}>Convert to LowerCase</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelClickClear}>Clear</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelCopy}>Copy Text</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Miniutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
        </div>
        </>
    )
}
