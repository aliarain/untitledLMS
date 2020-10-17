import React from 'react'
import './css/Chat.css'
import {sendMsg} from '../../../store/action/chatActions'
import {connect} from 'react-redux'
import Emojis from './Emojis'
import Popup from 'reactjs-popup';

const SendArea = (props) => {
    var state = {
       message: ''
    }

    const handleChange = (e) =>{
        state =({
          [e.target.id]:e.target.value
        })
    }

    const setEmoji = (emoji) =>{
        let txtarea = document.getElementById('message')
        txtarea.value += emoji
        state = {
            message: txtarea.value
         }
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
    return (
        <form className='send-area' id='form'>
            
            <textarea id='message' onChange={handleChange} placeholder='Type a message...'></textarea>
        <Popup 
            trigger={open => (
                <div className='sendBtn material-icons'>insert_emoticon</div>
            )}
            closeOnDocumentClick
        >
        <Emojis addEmoji={setEmoji} /> 
            </Popup>) 
            
            <div className='sendBtn material-icons' onClick={handleSubmit}>send</div>
        </form>
    )
}

const mapStateToProps = (state) => {
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