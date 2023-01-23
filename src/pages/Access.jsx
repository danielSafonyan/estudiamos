import React from "react";
import './Access.css'
// import SignUp from '../components/SignUp'
// import LogIn from '../components/LogIn'
import AccessSignUp from '../components/AccessSignUp'
import AccessSignIn from '../components/AccessSignIn'


export default function Access() {
    return (
        <div className="access-container">
            <div className="access-banner">
                <div className="access-banner-container">
                    <div className="access-banner-main-container">
                        <h1 className="access-banner-main-title">Estudiamos</h1>
                        <p className="access-banner-main-text">A better way to learn vocabulary.</p>
                    </div>
                    <span className="access-banner-bottom-text">Currently in Beta</span>
                    <span className="access-banner-top-text">Powered by danielSafonyan</span>
                </div>
            </div>
            <main className="access-main">
                <p className="access-main-text">Don't know a word? Translate it with Estudiamos and we will make it stick using the <a href="https://en.wikipedia.org/wiki/Forgetting_curve">forgetting curve</a>.</p>
               {/* <AccessSignUp /> */}
               <AccessSignIn />
            </main>
        </div>
        )
}

 