import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

export class QuestionDetails extends Component {
    render() {
        const {question,auth} = this.props;
         if(!auth.uid || !question){
             return <Redirect to='/forum' />
         }
    const questionid = question.id
        return (
            <div className='routeArea forum-question'>
            <div className='forumQuestionArea'>
            <span className='forumTitle'>Question</span>
            <div className='question-data'>
                <span className='question-summary-title titleDetails'>{question.title}</span>
        <span className='question-summary-author'>asked by {question.authorFirstName} {moment((question.timeAsked).toDate()).calendar()}</span>
        <p className='contentDetails'>{question.content}</p>
            </div>
            <span className='forumTitle'>Answers</span>
            <div className='questionAnswerArea'>

            </div>
            </div>
            <div className='forumAnswerArea'>
            <form className='forum-send-area' id='form'>
            <textarea className='forum-txtarea' id='message' placeholder='Type your answer......'></textarea>
            <div className='sendBtn material-icons' >send</div>
        </form>
            </div>
            </div>
        )
    }
}

const mapStatetoProps = (state, ownProps) => {
    // console.log(state);
    const linkid = ownProps.match.params.id;
    const questions = state.firestore.ordered.forum;
    const users = state.firestore.ordered.users;
    const question = questions ? questions.find(x => x.id === linkid) : null
    return{
    question: question,
    auth: state.firebase.auth,
    users: users
    }
}


export default compose(connect(mapStatetoProps,null),firestoreConnect(() => ['events','users']))(QuestionDetails)
