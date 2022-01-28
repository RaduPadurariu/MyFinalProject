import "./Contact.css"
import {useState} from "react";


export const Contact = () => {
   
    const [nameValue, setNameValue] = useState("");
    const [checkNameText, changeNameText] = useState("");

    const [emailValue, setEmailValue] = useState("");
    const [checkEmailText, changeEmailText] = useState("");

    const [messageValue, setMessageValue] = useState("");
    const [checkMessageText, changeMessageText] = useState("");

    const [check, setCheck] = useState("");

    const emailRegex = RegExp(/.+@+./);
    

    const nameChange = (event) => {
        if(event.target.value !=="") {
            changeNameText(false);
        }
        else changeNameText(true);
  
        setNameValue(event.target.value);
        setCheck("");
    }

    const emailChange = (event) => {
        if(emailRegex.test(event.target.value)) {
            changeEmailText(false);
        }
        else changeEmailText(true);

        setEmailValue(event.target.value);
        setCheck("");
 
        
    }

    const messageChange = (event) => {
        if(event.target.value !=="") {
            changeMessageText(false);
        }
        else changeMessageText(true);

        setMessageValue(event.target.value);
        setCheck("");
    }
    const validation = () => {
        if((nameValue !=="" && nameValue !== false) && (emailRegex.test(emailValue)) && (messageValue !=="" && messageValue !==false)) {
            setCheck(true);
            setNameValue("");
            setEmailValue("");
            setMessageValue("");
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
                    <input  id="name" type="text" placeholder="type name" value={nameValue} onChange={nameChange} />
                    <div className="contact--validation-container">
                        <div className={`contact--validation ${checkNameText===true ? "" : " contact--validation-none"}`} >Please enter your name</div>
                    </div>
                    
                    <input id="email"   type="text" placeholder="type email" value={emailValue} onChange={emailChange} />
                    <div className="contact--validation-container">
                        <div className={`contact--validation ${checkEmailText===true ? "" : " contact--validation-none"}`}>Please enter a valid email</div>
                    </div>
                    
                    <div className="contact--btn-container">
                        <div>
                            <textarea id="message"  className="contact--text-container"  type="text-area" placeholder="type message" value={messageValue} onChange={messageChange}/> 
                            <div className="contact--validation-container">
                                <div className={`contact--validation ${checkMessageText===true ? "" : " contact--validation-none"}`}>Please enter some message</div>
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