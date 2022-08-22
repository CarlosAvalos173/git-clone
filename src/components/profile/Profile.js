import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../common/Header";
import Context from "../../context";
import { withRouter } from 'react-router-dom';

const Profile = () => {
    
    const { user} = useContext(Context);
    //Function to extract the number of user rides from the user object
    const getNumberOfRides = () => {
        let numberOfRides = 0;
        if (user.rides) {
        numberOfRides = user.rides.length;
        }
        return numberOfRides;
    };

    const style = {
        width:"100%",
        height:"100vh",
    };

    // const renderUserInfo = () => {
    //     return (


    //         <div className="profile__info">
    //             <div className="profile__info__image">
    //                 <img src={user.image} alt={user.email} />
    //             </div>
    //             <div className="profile__info__details">
    //                 <div className="profile__info__details__name">
    //                     <span>{user.fullname}</span>
    //                 </div>
    //                 <div className="profile__info__details__email">
    //                     <span>{user.email}</span>
    //                 </div>
    //                 <div className="profile__info__details__rides">
    //                     <span>{getNumberOfRides()}</span>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

  return (
    <>
    <div>
    <Header />  
    <div className="profile__container" style={style} />
        <p>hhola</p>
    </div>
        

    </>

  );
};
export default Profile;