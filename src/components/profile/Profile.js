import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../common/Header";
import Context from "../../context";

const Header = () => {
    
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
    }

  return (
    <>
        <Header />
        <div className="profile">
            <div className="profile__left">
                <div className="profile__left__image">
                    <img src={user.image} alt={user.email} />
                </div>
                <div className="profile__left__info">
                    <div className="profile__left__info__name">
                        <span>{user.fullname}</span>
                    </div>
                    <div className="profile__left__info__email">
                        <span>{user.email}</span>
                    </div>
                    <div className="profile__left__info__rides">
                        <span>{getNumberOfRides()}</span>
                    </div>
                </div>
            </div>
        </div>
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

export default Header;