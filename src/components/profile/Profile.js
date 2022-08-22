import { useContext } from "react";
import Header from "../common/Header";


import Context from "../../context";

const Profile = () => {
    

    const { user } =
      useContext(Context);
  

    const style = {
        width:"100%",
        height:"100vh",
    };

    // const renderUserInfo = () => {
    //     console.log(user)
    //     return (


    //     );
    // };

  return (
    <>
    <div>
    <Header />  
    <div className="profile__container" style={style} />
    <div className="profile__info">
                <div className="profile__info__image">
                    <img src={user.image} alt={user.email} />
                </div>
                <div className="profile__info__details">
                    <div className="profile__info__details__name">
                        <span>{user.fullname}</span>
                    </div>
                    <div className="profile__info__details__email">
                        <span>{user.email}</span>
                    </div>
                    {/* <div className="profile__info__details__rides">
                        <span>{getNumberOfRides()}</span>
                    </div> */}
                </div>
            </div>
    </div>
        

    </>

  );
};
export default Profile;