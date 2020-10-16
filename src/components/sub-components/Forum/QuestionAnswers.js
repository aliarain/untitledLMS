import React from 'react'
import moment from 'moment'

const QuestionAnswers = (props) => {
    return (
        <div className='answer'>
        <span className='answerContent'>{props.answer}</span>
        <span className='answerAuthor'>by {props.name} {moment((props.time).toDate()).calendar()}</span>
    </div>
    )
}

export default QuestionAnswers
