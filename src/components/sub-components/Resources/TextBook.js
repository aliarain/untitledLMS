import React, { Component } from 'react'
import { connect } from 'react-redux'


const LoadBook = (name) =>{
    const Data = React.lazy(() =>
    import(`./TextBookList/EnglishMedium/${name}.json`)
  );
  return Data;
}  


export class TextBook extends Component {
    render() {
        const {auth,profile,linkid} = this.props;
        console.log(LoadBook(linkid))
        return (
            <div>
                this is the text book - {linkid}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    const linkid = ownProps.match.params.id;
  return {
      auth: state.firebase.auth,
      profile: state.firebase.profile,
      linkid: linkid
  }
}
export default connect(mapStateToProps,null)(TextBook)
