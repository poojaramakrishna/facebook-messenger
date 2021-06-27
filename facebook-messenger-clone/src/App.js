import './App.css';
import React,{useState,useRef,useEffect}from 'react';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './fire';
import firebase from 'firebase';


function App() {

  const[input,setInput] = useState("");
  const[message,setMessage] = useState([]);
  const[username,setUsername] = useState("");

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc=>doc.data()));
    })
}, []);
useEffect(() => {
  setUsername(prompt('Please enter your name'));
 
}, []);


  const sendMsg = (event) =>{
    db.collection('messages').add({
      message : input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    event.preventDefault();
  setMessage([...message,{username:username,text: input}]);
  setInput('');
}
  return (
    <div className="App">
     <h1>Facebook Messenger</h1>
     <h2>Welcome {username}</h2>
     <form className="app_form">

     <FormControl>

     {
        message.map(message => (
          <Message username={username} message={message}/>
      ))
    }
     
      <Input value={input} onChange={event => setInput(event.target.value)} placeholde= "enter your message"/>
      <Button disabled={!input} variant="outlined" color="primary" type="submit" onClick={sendMsg}>Send Message </Button>
     
      </FormControl>
      
  
     
      </form>
    </div>
  );
}

export default App;
