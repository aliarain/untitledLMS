
import React, { Component } from 'react'
import ChatList from './sub-components/ChatList'
import SendArea from './sub-components/ChatBoxes/SendArea'

export default class Chat extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div className='routeArea'>
=======
            <div className='routeArea chatRouteArea'>
>>>>>>> 50c53a4bf41f369b7dee8cc10db1882a873922a1
                <div className='chat-area'>
                 <ChatList />
                 </div>
                 <SendArea />
            </div>
        )
    }
}

