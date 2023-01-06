import React from "react";
import './SignIn.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from "react";

const SignIn = ({asdad}) => {
    useEffect(() => {
        Aos.init({duration:500});
      }, [])
    return (
        <div className='center parent-div' data-aos="fade-up">
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 sign-in-form">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                        <input onClick={() => asdad('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"  type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                        <p href="#0" onClick={() => asdad('signup')} className="f6 link dim black pointer db">Sign up</p>
                    </div>
                </form>
            </main>
        </article>
        </div>
        
    );
}

export default SignIn;