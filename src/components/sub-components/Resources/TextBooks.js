import React from 'react'
import { connect } from 'react-redux';

const TextBooks = (props) => {
    return (
        <div className='textBookArea'>
             <span className='forumTitle'>Text Books</span>
             <div id='mediumAreas' className='mediumAreas'>

             </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
  return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

export default connect(mapStateToProps,null)(TextBooks)
