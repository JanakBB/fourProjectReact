const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form was submitted!");
}

const Form = () => {
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Write something here!" />
            <button>Submit</button>
            {/* <button onClick={handleFormSubmit} >Submit</button> */}
        </form>
    )
}

export default Form;