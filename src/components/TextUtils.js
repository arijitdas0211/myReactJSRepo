import React, {useState} from "react";

export default function Textutils(prop) {
    const handleUpClick = ()=> {
        // console.log("UperCase button was clicked:- " + text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("Hello");
    }

    const handleLowClick = ()=> {
        setText(text.toLowerCase());
    }

    const handleClearClick = ()=> {
        let clear = '';
        setText(clear);
    }

    const handleOnChange = (event)=> {
        // console.log("On Change");
        setText(event.target.value);
        // setText(event.target.value.toUpperCase());   // It will print uppercase letters only, while typing even caps lock off.
    }

    const [text, setText] = useState('');
    const [btnText, setBtnText] = useState('Enable Dark Mode');
    const [myStyle, setMyStle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })
    const toggleStyle = ()=> {
        if(myStyle.color === 'black'){
            setMyStle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText('Enable Light Mode')
        } else {
            setMyStle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText('Enable Dark Mode')
        }
    }
    return (
        <>
            <div className={`container my-3 bg-${prop.mode} text-${prop.mode === 'dark'?'white':'dark'}`}>
                <h2 className="mb-3">{prop.title}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" ></textarea>
                <button type="button" className="btn btn-success mt-3 me-2" onClick={handleUpClick}>Convert Uppercase</button>
                <button type="button" className="btn btn-success mt-3" onClick={handleLowClick}>Convert Lowercase</button>
                <button type="button" className="btn btn-danger mt-3 float-end" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className={`container my-3 py-2 bg-${prop.mode} text-${prop.mode === 'dark'?'white':'dark'}`} style={myStyle}>
                <h3>Text Summary</h3>
                <p>{text.length === 0?0:text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length * 60} seconds OR {0.008 * text.split(" ").length} minutes to read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:'Enter text in the text box above, to preview here.'}</p>
            </div>
            <div className="container">
                <button className="btn btn-dark" onClick={toggleStyle}>{btnText}</button>
            </div>
        </>
    );
}