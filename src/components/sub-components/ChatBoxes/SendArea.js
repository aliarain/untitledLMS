import React, { Component, useState } from 'react'
import './css/Chat.css'
import {sendMsg} from '../../../store/action/chatActions'
import {connect} from 'react-redux'
import Picker from 'emoji-picker-react';

const SendArea = (props) => {
    var state = {
       message: ''
    }
    const handleChange = (e) =>{
        state =({
          [e.target.id]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(state.message!==''){
        props.sendMsg(state)
        document.getElementById("form").reset();
        state = {
            message: ''
         }
        }
    }

    var realEmoji = ""
    const [chosenEmoji, setChosenEmoji] = useState("emoji");
    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
      realEmoji = chosenEmoji.emoji
      console.log(realEmoji)
      
    };

    const HandleAddEmoticon = (e) => {
        let txtarea = document.getElementById('message')
        txtarea.value += realEmoji
        state = {
            message: txtarea.value
         }
    }

    return (
        <form className='send-area' id='form'>
            <Picker onEmojiClick={onEmojiClick} />
            <textarea id='message' onChange={handleChange} placeholder='Type a message......'></textarea>
            <div className='sendBtn material-icons' onClick={HandleAddEmoticon}>insert_emoticon</div>
            <div className='sendBtn material-icons' onClick={handleSubmit}>send</div>
        </form>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
  return {
      auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (message) => dispatch(sendMsg(message))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SendArea)