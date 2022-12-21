import React, { useEffect } from "react";
import M from "materialize-css";
import { Carousel } from "react-materialize";
import Slide from "./Slide";

const content = [
  <Slide
    key={1}
    img={"/images/slider/lars.svg"}
    name={"Lars larry"}
    icon={"/images/slider/lars-icon.svg"}
    current_bid={8.32}
    stock_quantity={12}
  />,
  <Slide
    key={2}
    img={"/images/slider/slide-2.svg"}
    name={"Lars larry"}
    icon={"/images/slider/lars-icon.svg"}
    current_bid={8.32}
    stock_quantity={12}
  />,
  <Slide
    key={3}
    img={"/images/slider/slide-3.svg"}
    name={"Lars larry"}
    icon={"/images/slider/lars-icon.svg"}
    current_bid={8.32}
    stock_quantity={12}
  />,
  <Slide
    key={4}
    img={"/images/slider/slide-4.svg"}
    name={"Lars larry"}
    icon={"/images/slider/lars-icon.svg"}
    current_bid={8.32}
    stock_quantity={12}
  />,
  <Slide
    key={5}
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
      children={content}
    />
  );
}
