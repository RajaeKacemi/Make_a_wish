const PersonalDataForm = () => {
    const inputText = "text";
    const inputEmail = "email";
    const persdata = "persdata";
    const subTitle = "subTitle";
    

    return (
        <div className={persdata}>
        <h4 className={subTitle}>Heroes need to be recognized</h4>
        <form>
            <label>First Name</label>
            <br></br>
            <input type={inputText} />
            <br></br>
            <label>last Name</label>
            <br></br>
            <input type={inputText}/>
            <br></br>
            <label>Email</label>
            <br></br>
            <input type={inputEmail}/>
            <br></br>
            <label>Phone number</label>
            <br></br>
            <input type={inputText}/>
        </form>
        </div>
    )
}

export default PersonalDataForm;