import React, { useEffect } from "react";
import M from "materialize-css";
import { Carousel } from "react-materialize";
import Slide from "./Slide";

const content = [
  <Slide
    img={"/images/slider/lars.svg"}
    name={"Lars larry"}
    icon={"/images/slider/lars-icon.svg"}
    current_bid={8.32}
    stock_quantity={12}
  />,
  <Slide
    img={"/images/slider/slide-2.svg"}
    name={"Lars larry"}
    icon={"/images/slider/lars-icon.svg"}
    current_bid={8.32}
    stock_quantity={12}
  />,
  <Slide
    img={"/images/slider/slide-3.svg"}
    name={"Lars larry"}
    icon={"/images/slider/lars-icon.svg"}
    current_bid={8.32}
    stock_quantity={12}
  />,
  <Slide
    img={"/images/slider/slide-4.svg"}
    name={"Lars larry"}
    icon={"/images/slider/lars-icon.svg"}
    current_bid={8.32}
    stock_quantity={12}
  />,
  <Slide
    img={"/images/slider/slide-3.svg"}
    name={"Lars larry"}
    icon={"/images/slider/lars-icon.svg"}
    current_bid={8.32}
    stock_quantity={12}
  />,
];

export default function Slider() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Carousel
      carouselId="Carousel-31"
      images={content}
      options={{
        dist: 50,
        duration: 200,
        fullWidth: false,
        indicators: false,
        noWrap: false,
        numVisible: 5,
        onCycleTo: null,
        padding: 0,
        shift: 10,
      }}
    />
  );
}
