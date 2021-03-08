import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { LoginContext } from '../Context/LoginState';
const clientId = '992813111921-9t3j7kh7vd4b77aren96cct2d38ebdsh.apps.googleusercontent.com';

function Logout(props) {
    const { setLogin } = useContext(LoginContext);
    const onSuccess = () => {
        alert('Logout Made Successfully');
        setLogin(false);
    }

    return (
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
};

export default Logout;