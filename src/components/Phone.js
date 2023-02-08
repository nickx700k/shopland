import React from "react";
import "./Phone.scss";

export default function Phone({ phone }) {
  return (
    <div className="phone">
      <img src={phone.thumbnail} alt="Phone Thumnail" className="phone--img" />
      <h3 className="phone--title">{phone.title}</h3>
      <span className="phone--cat">{phone.category}</span>
      <span className="phone--brand">{phone.brand}</span>
    </div>
  );
}
