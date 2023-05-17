


export default function Home() {

    function handleNextStep() {
        return
    }

    return (
    <div className="form-container">
        <h1 className="ff-sanserif">Personal info</h1>

        <p className="ff-sanserif">Please provide your name, email address, and phone number</p>
        <form className="flex step1-form">
            <label htmlFor="name"><span className="step1-label ff-sanserif">Name</span></label>
            <input type="text" id="name" name="name" placeholder="e.g. Stephen King"/>

            <label htmlFor="email"><span className="step1-label ff-sanserif">Email Adress</span></label>
            <input type="text" id="email" name="email" placeholder="e.g. stephenking@lorem.com"/>

            <label htmlFor="phone"><span className="step1-label ff-sanserif">Phone Number</span></label>
            <input type="text" id="phone" name="name" placeholder="e.g. +1 234 567 890 "/>

            <div className="flex" style={{justifyContent: 'flex-end'}}>
            <button type="button" onClick={handleNextStep} className="next-step ff-sanserif">Next Step</button>
            </div>
        </form>
    </div>
)
}