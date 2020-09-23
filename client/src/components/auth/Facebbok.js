import React from 'react';
import FacebookLogin from 'react-facebook-login';

function Facebbok() {

    const [isLoggedIn,setIsLoggedIn] = useState(false)

    let fbContent

   if(isLoggedIn){

   } else {
       fbContent = (<FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />)
   }
}

export default Facebbok
