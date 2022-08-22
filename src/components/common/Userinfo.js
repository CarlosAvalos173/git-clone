import { useContext } from "react";
import { useHistory} from "react-router-dom";

import Context from "../../context";
import { withRouter } from 'react-router-dom';

const Userinfo = () => {

    const { user } = useContext(Context);
  

    const style = {
        width:"100%",
        height:"100vh",
    };

    return (
    // <div className="userinfo">
    //   <div className="userinfo__left">
    //     <span>Information: </span>
    //     {user && (
    //       <div className="userinfo__right">
    //         <img src={user.image} alt={user.email} />
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="ride-detail">
    <div className="ride-detail__user-avatar">
      <img src={user.image} alt={user.email} />
      <span>Name:</span>
      {user.fullname}
    </div>
    <div className="ride-detail__actions" >
      {/* <div className="ride-detail__action" onClick={talkToUser}>
        <img src={email} alt="email" />
      </div> */}
      {/* <div className="ride-detail__action" onClick={cancelRide}>
        <img src={exit} alt="exit" />
      </div> */}
      {/* {isDriver && (
        <div className="ride-detail__action" onClick={finishRide}>
          <img src={tick} alt="tick" />
        </div>
      )} */}
    </div>
    <div className="ride-detail__content">
      <p className="ride-detail__result-label">
        <span>Email: </span>
        {user.email}
      </p>
      <p className="ride-detail__result-label">
        <span>Phone: </span>
        {user.phone}
      </p>
      <p className="ride-detail__result-label">
        <span>Account: </span>
        {user.role}
      </p>
      {/* <p className="ride-detail__result-label">
        <span>From: </span>
        {currentRide.pickup && currentRide.pickup.label
          ? currentRide.pickup.label
          : ""}
      </p> */}
      {/* <p className="ride-detail__result-label">
        <span>To: </span>
        {currentRide.destination && currentRide.destination.label
          ? currentRide.destination.label
          : ""}
      </p> */}
      {/* {!isDriver && isPaid && (
        <ProductDisplay />
      )} */}
    </div>
  </div>
    );

    
};
export default Userinfo;