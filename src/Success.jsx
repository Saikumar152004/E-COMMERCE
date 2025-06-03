import React from "react";
import Giff from "./images/success.gif";

export default function Success() {
  return (
    <div>
      <div className="row my-5">
        <div className="col-md-6 offset-md-3 text-center">
          <div className="card text-center p-4">
            <img className="success-img"  src={Giff} />
            <h2> Your Order Confirm </h2>
            <p> Your product delivered Soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
