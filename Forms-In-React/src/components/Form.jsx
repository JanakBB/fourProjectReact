import { useState } from "react";

const Form = () => {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });

    const formOnchangeHandler = (e) => {
        setFormData((formData) => {
            formData[e.target.name] = e.target.value;
            return {...formData}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: "",
        })
    }
    
    return(
        <form action="" onSubmit={handleSubmit}>
            <legend>
            <label htmlFor="fullName">Full Name:</label>
            <input 
                type="text" 
                placeholder="e.g: Janak Bohara"
                value={formData.fullName}
                onChange={formOnchangeHandler}
                id="fullName"
                name="fullName"
            />
            </legend>
             <legend>
             <label htmlFor="userName">User Name:</label>
             <input 
                type="text" 
                placeholder="e.g: @abcd"
                value={formData.userName}
                onChange={formOnchangeHandler}
                id="userName"
                name="userName"
            />
             </legend>
             <legend>
             <label htmlFor="password">Password:</label>
            <input
                type="password" 
                name="password"
                id="password"
                placeholder="enter your password"
                value={formData.password}
                onChange={formOnchangeHandler}
             />
             </legend>
            
            
            <button>Submit</button>
        </form>
    )
}

export default Form;