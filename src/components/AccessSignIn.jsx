import React from 'react'

export default function AccessSignUpp() {
    const [inputState, setInputState] = React.useState({
        email: '',
        pass: '',
        passCheck: '',
    })

    function handleSubmit(e) {
        e.preventDefault() 
        console.log("Sumbiting form")
    }

    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value
        setInputState(prev => {
            return {
                ...prev,
                [key]: value
            }
        })
    }
    return (
         <form className="access-main-form" onSubmit={handleSubmit}>
            <h2 className="access-main-form-title">Sign In</h2>
            <input type="email" name="email" className="invalid" placeholder="email" required autoComplete='' value={inputState.email} onChange={handleChange}/> 
            <input type="password" name="pass" value={inputState.pass} className="invalid" placeholder="password" autoComplete="new-password" required onChange={handleChange}/>
            <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
            <p className="main-text sign-in">Don't have an account? <a href="#">Sign up</a></p>
        </form>
    )
}