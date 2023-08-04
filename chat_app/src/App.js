import React ,{useState, useRef}from 'react'
import Auth from './components/Auth'
import "./App.css"
import Cookies from 'universal-cookie'
import Chat from './components/Chat'
import "./styles/Auth.css"
import "./styles/Chat.css"
import {signOut} from "firebase/auth"
import {auth} from './firebase-config'
const cookies=new Cookies();

export default function App() {
  const [isAuth,setIsAuth] =useState(cookies.get("auth-token"));
  const [room,setRoom]=useState(null);

  const roomInputRef=useRef(null);

  const signUserOut=async()=>{
    await signOut(auth)
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);

  }

  if(!isAuth)
  {
    return (
      <div>
          <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }
  
  return <>
  {room? <div>

  <Chat room={room}/>
  </div>:
   <div className='room'>
   <label htmlFor="">Enter Room Name:</label>
   <input type="text" ref={roomInputRef} />
   <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter Chat</button>
   </div>}
   <div className='sign-out'>
    <button className='signout' onClick={signUserOut}>Sign Out</button>
   </div>
  </>
}
