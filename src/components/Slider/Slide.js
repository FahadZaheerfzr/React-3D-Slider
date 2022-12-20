import React from "react";
import Style from "./Slide.module.css";

export default function Slide({
  img,
  icon,
  name,
  current_bid,
  stock_quantity,
}) {
  return (
    <div className={`carousel-item ${Style.slide}`}>
      <div className={`${Style.imageDiv}`}>
        <img src={img} alt={name} className={`${Style.slideImage}`} />
      </div>
      <div className={`${Style.slideContent}`}>
        <div className={`${Style.flex}`}>
          <img src={icon} alt={name} className={`${Style.icon}`} />
          <div className={`${Style.nameDiv}`}>
            <span className={`${Style.name}`}>{name}</span>
            <span className={`${Style.stock}`}>{stock_quantity} in stock</span>
          </div>
        </div>

        <div className={`${Style.bidDiv}`}>
          <span>Current bid</span>
          <span className={`${Style.bid}`}>
            <img
              src={"/images/slider/eth.svg"}
              alt="eth"
              className={`${Style.eth}`}
            />
            {current_bid} ETH
          </span>
        </div>
      </div>
    </div>
  );
}
