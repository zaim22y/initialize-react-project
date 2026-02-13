import { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({name: '', lastName: '', birthday: '', email: '', password: '' });

const handleSubmit = async (e) => {

    e.preventDefault();

    try {const response = await fetch('http://localhost:5000/api/form', formData)
        console.log("Form data submitted successfully:", formData);}
catch (error) {console.error("Error submitting form data:", error); } };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>FirstName:</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label>LastName:</label>
                <input type="text" id="lastName" name="lastName" />
            </div>
            <div>
                <label>birthday:</label>
                <input type="date" id="birthday" name="birthday" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
    