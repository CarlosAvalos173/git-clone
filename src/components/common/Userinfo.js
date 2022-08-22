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
    <div className="userinfo">
      <div className="userinfo__left">
        <span>Information: </span>
        {user && (
          <div className="userinfo__right">
            <img src={user.image} alt={user.email} />
          </div>
        )}
      </div>
    </div>
    );

    
};
export default Userinfo;