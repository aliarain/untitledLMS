import React from 'react'

const TextBooks = () => {
    fetch("/Resources/TextBooks/G09/EnglishMedium/Buddhism-Grade-9-E.json")
      .then(function(resp){
         return resp.json();
      })
      .then(function(data){
          console.log(data);
     });
    return (
        <div className='textBookArea'>
             <span className='forumTitle'>Text Books</span>
        </div>
    )
}

export default TextBooks
