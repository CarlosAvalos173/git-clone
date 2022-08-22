import { useContext } from "react";
import Header from "../common/Header";
import Userinfo from "../common/Userinfo";

import Context from "../../context";
import RequestRide from "../request-ride/RequestRide";

const Profile = () => {
    

    const { user } =
      useContext(Context);
  

    const style = {
        width:"100%",
        height:"100vh",
    };

    console.log(user);
    // const renderUserInfo = () => {
    //     console.log(user)
    //     return (


    //     );
    // };
    
  return (
    <>
    <div>
    <Header/>  
    <Userinfo/>
    </div>
    </>

  );
};
export default Profile;