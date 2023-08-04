import React from 'react'
import {auth,provider} from "../firebase-config.js"
import {signInWithPopup} from "firebase/auth"

import Cookies from 'universal-cookie'
const cookies=new Cookies()

export default function Auth(props) {
    const {setIsAuth}=props;

    const signInWithGoogle=async()=>{
        try{
       const result= await signInWithPopup(auth,provider);
       cookies.set("auth-token",result.user.refreshToken);
       setIsAuth(true);
        }
        catch(err)
        {
            console.log(err);
        }
    };

  return (
    <div className='auth'>
        <p>
            Sign In with Google to Continue
        </p>
        <button onClick={signInWithGoogle}>
            Sign In
        </button>
    </div>
  )
}
