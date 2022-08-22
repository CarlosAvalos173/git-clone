import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../common/Header";
import * as firebaseService from "../../services/firebase";
import * as uiService from "../../services/ui";
import { useEffect, useState, useRef } from "react";


import Context from "../../context";
import { withRouter } from 'react-router-dom';

const Profile = () => {
    
    const [rideRequests, setRideRequests] = useState();

    const { user, setCurrentRide, setSelectedFrom, setSelectedTo } =
      useContext(Context);
  
    const fbUserRef = useRef(firebaseService.getRef("users"));

    useEffect(() => {
        firebaseService.getDataRealtimeQuery({
          ref: fbUserRef,
          query: "status",
          criteria: "waiting",
          callback: onRidesLoaded,
        });
        return () => {
          firebaseService.offRealtimeDatabase(fbUserRef.current);
        };
      }, []);

    const style = {
        width:"100%",
        height:"100vh",
    };

    const renderUserInfo = () => {
        console.log(user)
        return (
            <div>
            <span>MedHelp</span>
            <span> {user.fullname} </span>
            {/* {user && (
                <div>
                  <img src={user.image} alt={user.email} />
                  <span> Helloo, {user.fullname} </span>
                </div>

              )} */}
              </div>
            // <div className="profile__info">
            //     <div className="profile__info__image">
            //         <img src={user.image} alt={user.email} />
            //     </div>
            //     <div className="profile__info__details">
            //         <div className="profile__info__details__name">
            //             <span>{user.fullname}</span>
            //         </div>
            //         <div className="profile__info__details__email">
            //             <span>{user.email}</span>
            //         </div>
            //         <div className="profile__info__details__rides">
            //             <span>{getNumberOfRides()}</span>
            //         </div>
            //     </div>
            // </div>
        );
    };

  return (
    <>
    <div>
    <Header />  
    <div className="profile__container" style={style} />
    {renderUserInfo()}
    </div>
        

    </>

  );
};
export default Profile;