import React from "react";
import './Access.css'
// import SignUp from '../components/SignUp'
// import LogIn from '../components/LogIn'



export default function Access() {
    return (
        <div className="access-main">
            <aside className="intro">
                <div className="intro-container">
                    <div className="main-text-container">
                        <h1 className="main-title">Estudiamos</h1>
                        <p className="main-text">A better way to learn vocabulary.</p>
                    </div>
                    <span className="bottom-text">Currently in Beta</span>
                    <span className="top-text">Powered by danielSafonyan</span>
                </div>
            </aside>
            <main className="main-content">
                <p className="main-text">Don't know a word? Translate it with Estudiamos and we will make it stick using the <a href="https://en.wikipedia.org/wiki/Forgetting_curve">forgetting curve</a>.</p>

                
                <form className="access-form">
                    <h2 className="create-title">Create Account</h2>
                    <input type="email" id="email" name="email" className="invalid" placeholder="email" required /> 
                    <input type="password" id="pwd" name="pwd" className="invalid" placeholder="password" required />
                    <input type="password" id="check-pwd" name="check-pwd" className="invalid" placeholder="repeat password" required />
                    <button className="inactive" type="submit" form="sign_up_form">Create Account</button>
                </form>

                
                <p className="main-text sign-in">Already have an account? <a href="#">Sign in</a></p>
                
            </main>
        </div>
        )
}

 