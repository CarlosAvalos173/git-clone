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
    <div className="ride-detail">
    <div className="ride-detail__user-avatar">
      <img src={user.image} alt={user.email} />
      <span>Name:</span>
      {user.fullname}
    </div>
    <div className="ride-detail__actions" >
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

    </div>
  </div>
    );

    
};
export default Userinfo;