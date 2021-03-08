import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import axios from 'axios';
import { LoginContext } from '../Context/LoginState';
 const clientId =
  "992813111921-9t3j7kh7vd4b77aren96cct2d38ebdsh.apps.googleusercontent.com";




const Login = () => {
  const { addProfileData, setLogin } = useContext(LoginContext);

  const onSuccess = (res) => {
    setLogin(true);
    const Obj = res.profileObj;
    userToDb(Obj.name, Obj.email);
    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const userToDb = async (name, email) => {
    const res = await axios.post('/api/userExist', {userName: name, userEmail: email});
    if (res.data == false) {
      await axios.post('/api/createUser', {userName: name, userEmail: email});
    }
    const res2 = await axios.post('/api/getUserId', {userEmail: email});
    const id = res2.data
    addProfileData(id, name, email);

  }

  const onFailure = (res) => {
    setLogin(false);
    console.log("[Login Failed] res:", res);
  };
  

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;