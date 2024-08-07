import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
const Course = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:8000/book");
        const data = res.data.filter((data) => data.category === "free");
        console.log(res.data);
        console.log(res);
        setbook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  //console.log(filterData);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-10 ">
        <div>
          <h1 className="font-semibold text-xl pb-4">Free Course</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            rem ipsum non saepe, accusamus doloribus eius inventore cumque
            corporis illo, amet a tempora molestiae impedit.
          </p>
        </div>

        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {book.map((item) => {
                return <Card item={item} key={item.id}></Card>;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
