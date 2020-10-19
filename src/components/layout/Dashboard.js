import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Link } from 'react-router-dom'
import Clock from './Clock'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='routeArea'>
                <div className='dashboard'>
                    <div className='dashboard-sec-1'></div>
                    <div className='dashboard-sec-2'>
                        <div className='clock'>
                           <Clock />
                        </div>
                        <div className='apps'>
                            <div className='app-row'>
                                <Flippy className='app' flipOnHover={true} flipDirection="horizontal">
                                    <FrontSide className='app-front'>
                                        <img className='image-size' alt='this img was taken from undraw.co' src='/assets/images/meetings.svg'></img>
                                    </FrontSide>
                                    <BackSide className='app-back'>
                                         <Link to='/events' className='forumTitle card-link'>Meetings</Link>
                                    </BackSide>
                                </Flippy>
                                <Flippy className='app' flipOnHover={true} flipDirection="horizontal">
                                    <FrontSide className='app-front'>
                                    <img className='image-size' alt='this img was taken from undraw.co' src='/assets/images/chat.svg'></img>
                                    </FrontSide>
                                    <BackSide className='app-back'>
                                    <Link to='/chat' className='forumTitle card-link'>Chat</Link>
                                    </BackSide>
                                </Flippy>
                            </div>
                            <div className='app-row'>
                            <Flippy className='app' flipOnHover={true} flipDirection="horizontal">
                                    <FrontSide className='app-front'>
                                    <img className='image-size' alt='this img was taken from undraw.co' src='/assets/images/forum.svg'></img>
                                    </FrontSide>
                                    <BackSide className='app-back'>
                                    <Link to='/forum' className='forumTitle card-link'>Forum</Link>
                                    </BackSide>
                                </Flippy>
                                <Flippy className='app' flipOnHover={true} flipDirection="horizontal">
                                    <FrontSide className='app-front'>
                                    <img className='image-size' alt='this img was taken from undraw.co' src='/assets/images/resources.svg'></img>
                                    </FrontSide>
                                    <BackSide className='app-back'>
                                    <Link to='/resources' className='forumTitle card-link'>Resources</Link>
                                    </BackSide>
                                </Flippy>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
