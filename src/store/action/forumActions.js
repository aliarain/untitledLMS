export const createQuestion = (project) =>{
    return (dispatch, getState, {getFirebase,getFirestore})=> {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const auth = getState().firebase.auth;
        // const authorInfo = {uid:auth.uid,timeJoined:new Date}
        firestore.collection('forum').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorUID: auth.uid,
            timeAsked: new Date(),
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT',project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR',err});
        });
        
    }
};