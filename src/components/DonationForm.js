const Description = () => {
    const inputText = "text";
    const subTitle = "subTitle";
    const persdata = "persdata";
    return (
        <div className={persdata}>
        <h4 className={subTitle}>When we give cheerfully and accept gratefully, everyone is blessed</h4>
        <form>
            <label>Amount</label>
            <br></br>
            <input type={inputText}/>
            <br></br>
            <label>Message</label>
            <br></br>
            <textArea type={inputText}/>
            <br></br>
        </form>
        </div>
    )
}

export default Description;