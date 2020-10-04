import React, {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import {SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import "./Chat.css"
import {Avatar, IconButton} from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";


function Chat() {
    const [input, setInput] = useState("");                         //To get Input of form
    const  [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName]  = useState("");
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        if( roomId){
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => 
                setRoomName(snapshot.data().name)); // pull roomname and display it on chat header
                
            db.collection("rooms").doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ));
            
        };

    }, [roomId]);

    useEffect(() => {                                                 
        setSeed(Math.floor(Math.random() * 5000));                  //To generate random number
        
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>>', input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),

        })
        setInput("");                                             //To empty input button after sending msg 
    }
    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen{" "}
                {
                    new Date(
                        messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()
                    
                }</p>
            </div>

            <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>                   

            </div>

            </div>

            <div className="chat__body">

                {messages.map(message => (
                    <p className={`chat__message ${
                        message.name === user.displayName && "chat__reciever"}`}>
                    <span className="chat__name">{message.name}</span>{message.message}
                        <span className="chat__timestamp">
                         {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}

                

            </div>

            <div className="chat__footer">
                    <InsertEmoticon />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message" />
                        <button onClick={sendMessage} type="submit">Send a messsage</button>
                    </form>

                    <MicIcon />
            </div>
        </div>
    )
}

export default Chat
