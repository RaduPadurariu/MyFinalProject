import "./Contact.css"

export const Contact = () => {
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
                    <input id="name" type="text" placeholder="type name"/>
                    <input id="email"   type="text" placeholder="type email"/>
                    <div className="contact--btn-container">
                        <textarea id="message"  className="contact--text-container"  type="text-area" placeholder="type message"/> 
                        <div >
                            <button className="contact--btn">Send</button>
                        </div> 
                    </div>
                    
                </div> 
            </div>
            
            
        </div>
    )
}