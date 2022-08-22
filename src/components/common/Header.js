import { useContext } from "react";
import { useHistory} from "react-router-dom";

import Context from "../../context";
import { withRouter } from 'react-router-dom';
const Header = () => {
  const { user, setUser, cometChat } = useContext(Context);
  const history = useHistory();

  const logout = async () => {
    const isLogout = window.confirm("Do you want to log out ?");
    if (isLogout) {
      await cometChat.logout();
      removeAuthedInfo();
      history.push("/login");
    }
  };

  const removeAuthedInfo = () => {
    setUser(null);
    localStorage.removeItem("auth");
  };

  const viewProfile = () => {
    history.push("/profile");
  };

  return (
    <div className="header">
      <div className="header__left">
        <span>MedHelp</span>
        {user && (
          <div className="header__right">
            <img src={user.image} alt={user.email} />
            <span> Hello, {user.fullname} </span>
            <button onClick={() => { history('/profile');}}></button>
          </div>
        )}
      </div>
      <span className="header__logout" onClick={logout}>
        <span>Logout</span>
      </span>
    </div>
  );
};

export default Header;
