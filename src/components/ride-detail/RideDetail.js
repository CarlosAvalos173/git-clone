import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import * as firebaseService from "../../services/firebase";
import * as uiService from "../../services/ui";

import Context from "../../context";

import email from "../../images/email.png";
import exit from "../../images/exit.png";
import tick from "../../images/tick.png";


// default state is notPaid
let status = "notPaid";

const isPaid = () => {
  console.log(status);
  return status === "paid";
}

const change_status = () => {
  status = "paid";
}

const ProductDisplay = () => (
  <section>
    <div className="product">
      <div className="description">
      <h3>Servicio Medico a Domicilio MedHelp</h3>
      <h5>$300.00 MXN</h5>
      </div>
    </div>
    <form target="_blank" action="https://buy.stripe.com/test_6oEbJ1e7G7rY4bCeUU">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const RideDetail = ({ user, isDriver, currentRide }) => {
  const { setCurrentRide } = useContext(Context);

  const history = useHistory();

  const cancelRide = () => {
    const isCancel = window.confirm("Do you want to cancel this nurse?");
    if (isCancel) {
      currentRide.status = "canceled";
      updateRide(currentRide);
    }
  };

  const finishRide = () => {
    const isFinish = window.confirm("Do you want to finish this cite?");
    if (isFinish) {
      currentRide.status = "done";
      updateRide(currentRide);
    }
  };

  const updateRide = async (ride) => {
    uiService.showLoading();
    try {
      await firebaseService.insert({
        key: "rides",
        id: ride.rideUuid,
        payload: ride,
      });
    } catch (error) {
      uiService.hideLoading();
    }
    uiService.hideLoading();
    removeRide();
  };

  const removeRide = () => {
    localStorage.removeItem("currentRide");
    setCurrentRide(null);
    window.location.reload();
  };

  const talkToUser = () => {
    history.push("/chat");
  };

  return (
    <div className="ride-detail">
      <div className="ride-detail__user-avatar">
        <img src={user.image} alt={user.email} />
      </div>
      <div className="ride-detail__actions" >
        <div className="ride-detail__action" onClick={talkToUser}>
          <img src={email} alt="email" />
        </div>
        <div className="ride-detail__action" onClick={cancelRide}>
          <img src={exit} alt="exit" />
        </div>
        {isDriver && (
          <div className="ride-detail__action" onClick={finishRide}>
            <img src={tick} alt="tick" />
          </div>
        )}
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
          <span>Cost: </span>
          $300.00 MXN
        </p>
        {/* <p className="ride-detail__result-label">
          <span>From: </span>
          {currentRide.pickup && currentRide.pickup.label
            ? currentRide.pickup.label
            : ""}
        </p> */}
        <p className="ride-detail__result-label">
          <span>To: </span>
          {currentRide.destination && currentRide.destination.label
            ? currentRide.destination.label
            : ""}
        </p>
        {!isDriver && isPaid && (
          <ProductDisplay />
        )}
      </div>
    </div>
  );
};

export default RideDetail;
