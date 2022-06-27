import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import * as firebaseService from "../../services/firebase";
import * as uiService from "../../services/ui";

import Context from "../../context";

const RequestRide = ({ toggleModal }) => {
  const { user, selectedFrom, selectedTo, setRideRequest } =
    useContext(Context);

  const requestRide = async () => {
    if (user && selectedFrom && selectedTo) {
      toggleModal(false);
      uiService.showLoading();
      const rideUuid = uuidv4();
      const ride = {
        rideUuid: rideUuid,
        requestor: user,
        pickup: selectedFrom,
        // destination: selectedTo,
        destination: selectedFrom,
        status: "waiting",
      };
      try {
        await firebaseService.insert({
          key: "rides",
          id: rideUuid,
          payload: ride,
        });
        setRideRequest(ride);
        uiService.hideLoading();
      } catch (error) {
        uiService.hideLoading();
      }
    }
  };

  return (
    <div className="request-ride">
      <div className="request-ride__content">
        <div className="request-ride__container">
          <div className="request-ride__title">Requesting a Nurse</div>
          <div className="request-ride__close">
            <img
              alt="close"
              onClick={() => toggleModal(false)}
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
            />
          </div>
        </div>
        <div className="request-ride__subtitle"></div>
        <div className="request-ride__form">
          <p>
            You entered the where you are location successfully. Do you want to request
            a nurse now ?
          </p>
          <button
            className="request-ride__btn request-ride__change-btn"
            onClick={() => toggleModal(false)}
          >
            Change
          </button>
          <button className="request-ride__btn" onClick={requestRide}>
            Requesting a nurse now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestRide;
