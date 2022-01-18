import "./Contact.css"
import {useEffect, useState} from "react";


export const Contact = () => {
   
    const [nameValue, setNameValue] = useState(false);
    const [emailValue, setEmailValue] = useState(false);
    const [messageValue, setMessageValue] = useState(false);
    const [check, setCheck] = useState("");

    const nameChange = (event) => {
        setNameValue(event.target.value);
        setCheck("");
    }

    const emailChange = (event) => {
        setEmailValue(event.target.value);
        setCheck("");
    }

    const messageChange = (event) => {
        setMessageValue(event.target.value);
        setCheck("");
    }
    const validation = () => {
        if((nameValue !=="" && nameValue !== false) && (emailValue !=="" && emailValue !==false) && (messageValue !=="" && messageValue !==false)) {
            setCheck(true);
        }
        else setCheck(false);

    }  

    return (
        <div className="contact">
            <div className="contact-header">Contact <span className="me"> Me</span></div>
            <div className="contact-form">
                <div className="contact--label-container">
                    <label className="label-name"  htmlFor="name"> Name -</label>
                    <label className="label-email"   htmlFor="email"> Email -</label>
                    <label className="label-message"  htmlFor="message"> Message -</label>
                </div>
                <div className="contact--input-container">
                    <input  id="name" type="text" placeholder="type name" onChange={nameChange}/>
                    <div className="contact--validation-container">
                        <div className={`contact--validation ${nameValue==="" ? "" : " contact--validation-none"}`} >Please enter your name</div>
                    </div>
                    
                    <input id="email"   type="text" placeholder="type email" onChange={emailChange}/>
                    <div className="contact--validation-container">
                        <div className={`contact--validation ${emailValue==="" ? "" : " contact--validation-none"}`}>Please enter a valid email</div>
                    </div>
                    

                    <div className="contact--btn-container">
                        <div>
                            <textarea id="message"  className="contact--text-container"  type="text-area" placeholder="type message" onChange={messageChange}/> 
                            <div className="contact--validation-container">
                                <div className={`contact--validation ${messageValue==="" ? "" : " contact--validation-none"}`}>Please enter some message</div>
                            </div>
                            <div className="contact--validation-container">
                                <div className={`contact--validation-total ${check===true ? "" : " contact--validation-send"}`}> 
                                    Your message has been send
                                </div>
                                <div className={`contact--validation ${check=== false ? "" : " contact--validation-none"}`}>
                                        Some input fields are missing.  
                                </div>
                            </div>
                            
                        </div>
                        
                        <div >
                            <button onClick={validation} className="contact--btn" >Send</button>
                        </div> 
                    </div>
                    
                </div> 
            </div>
            
            
        </div>
    )
}