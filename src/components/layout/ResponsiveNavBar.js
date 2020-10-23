import React from 'react'

let isOpen = false
const OpenCloseNav = () =>{
  let navbar = document.getElementById('sidebar')
  let btn = document.getElementById('open-close-btn')
 if(isOpen){
     navbar.style.transform = 'translateX(-100%)'
     btn.innerHTML = 'menu'
     isOpen=false
     btn.style.transform='rotate(0)'
    }else{
    navbar.style.transform = 'translateX(0)'
        isOpen=true
        btn.innerHTML = 'close'
        btn.style.transform='rotate(-90deg)'
    }
}

const ResponsiveNavBar = () => {

    return (
        <div className='responsive-navbar'>
            <div className='titleDiv rspTitle'>CATALYST.LMS</div>
            <div className='material-icons rsp-nav-btn' id='open-close-btn' onClick={OpenCloseNav}>menu</div>
        </div>
    )
}

export default ResponsiveNavBar
