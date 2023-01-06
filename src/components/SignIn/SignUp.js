import React from "react";
import './SignIn.css';
import 'aos/dist/aos.css'

const SignUp = ({asdad}) => {
    return (
        <div className='center parent-div' data-aos="fade-right">
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 sign-in-form">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
                    </div>
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
                        <input onClick={() => asdad('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"  type="submit" value="Sign up"/>
                    </div>
                </form>
            </main>
        </article>
        </div>
        
    );
}

export default SignUp;