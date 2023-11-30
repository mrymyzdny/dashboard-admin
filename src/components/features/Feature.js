import React from "react";
import "./Feature.css";

export default function Feature(props) {
  return (
    <div className="featuresWrapper">
      <div className="featureBox">
        <div className="featureBoxHead">
          <div className={`featureBoxIcon ${props.color}`}>{props.icon}</div>
          <div className="featureBoxText">
            <p className="featureBoxTitle">{props.title}</p>
            <span className="featureBoxNum">{props.num}</span>
          </div>
        </div>
        <span className="featureBoxPercent">{props.percent} </span>
        <span className="featureBoxCaption">{props.caption}</span>
      </div>
    </div>
  );
}
