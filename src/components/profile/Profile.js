import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../common/Header";
import Context from "../../context";
import { withRouter } from 'react-router-dom';

const Profile = () => {
    
    const { user, setUser, cometChat } = useContext(Context);
    //Function to extract the number of user rides from the user object
    const getNumberOfRides = () => {
        let numberOfRides = 0;
        if (user.rides) {
        numberOfRides = user.rides.length;
        }
        return numberOfRides;
    };


  return (
    <>
        <Header />

    </>
    //giving a beautiful format as presentation of info and table of rides

    // <div className="header">
    //   <div className="header__left">
    //     <span>MedHelp</span>
    //     {user && (
    //       <div className="header__right">
    //         <img src={user.image} alt={user.email} />
    //         <span>Hello, {user.fullname}</span>
    //       </div>
    //     )}
    //   </div>
    //   <span className="header__logout" onClick={logout}>
    //     <span>Logout</span>
    //   </span>
    // </div>
  );
};
export default Profile;