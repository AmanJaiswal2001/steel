
import React from "react";
import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NewCard = () => {
 
      const containerStyle = {
        position: "relative",
      };
    
      const imageWrapperStyle = {
        overflow: "hidden",
        borderBottomLeftRadius: "100px",
        borderBottomRightRadius: "100px",
      };

      
  const imageStyle = {
    objectFit: "cover",
    width: "250px",
    height: "300px",
  };
    
      const textStyle = {
        position: "absolute",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        fontFamily: "sans-serif",
        background: "rgba(0, 0, 0, 0.963)",
        top: "210px",
        left: "160px",

      };
 
    return (
    <div style={{ position: "relative" }}>
    <style>
        {`
          .inverted-radius {
            --r: 40px;
            --s: 60px;
            --x: 10px;
            --y: 10px;

            width: 250px;
            aspect-ratio: 1;
            background: #3FB8AF;
            border-radius: var(--r);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            --_m: /calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%, #0000 72%);
            --_g: conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)), #0000 25%, #000 0);
            --_d: (var(--s) + var(--r));
            mask:    calc(100% - var(--_d) - var(--x)) 100% var(--_m),
                    100% calc(100% - var(--_d) - var(--y)) var(--_m),
                    radial-gradient(var(--s) at 100% 100%, #0000 99%, #000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
                    var(--_g) calc(-1*var(--_d) - var(--x)) 0,
                    var(--_g) 0 calc(-1*var(--_d) - var(--y));
            mask-repeat: no-repeat;
          }
        `}
      </style>
    {/* <div style={containerStyle}> */}
      <div className="inverted-radius">
        <img src="/Mask group(1).png" alt="Example" style={imageStyle} />
      </div>
      <span style={textStyle}>Hello World</span>
    </div>
  )
}

export default NewCard







// const slides = [
//     {
//       image: "https://sail.co.in/sites/default/files/2021-01/slide1.jpg",
//       title: "Bhilai Steel Plant",
//       description: "Universal Rail Mill at Bhilai Steel Plant"
//     },
//     {
//       image: "https://sail.co.in/sites/default/files/2021-01/slide2.jpg",
//       title: "Durgapur Steel Plant",
//       description: "Wheel & Axle Plant at Durgapur Steel Plant"
//     },
//     {
//       image: "https://sail.co.in/sites/default/files/2021-01/slide3.jpg",
//       title: "Bokaro Steel Plant",
//       description: "Cold Rolling Mill at Bokaro Steel Plant"
//     }
//   ];
  




  
const images = [
   
    "/banner-07.webp",
    "/desktop__1_.webp",
    "/banner-07.webp",
    "/desktop__1_.webp",
  ];
  
  
    export const VariableWidth=()=> {
        const settings = {
            className: "slider variable-width",
            dots: true,
            infinite: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
          };    
          const reversedImages = [...images].reverse();
          return (
            <div className="slider-container ">
            <Slider {...settings}>
            
            {/* <div className=" flex flex-col gap-10"> */}
            {images.map((img, idx) => (
          <div key={idx} style={{ width: 1424 }} className="px-2 rounded-lg">
            <div className="rounded-2xl  shadow-lg">
              <img
                className="w-full h-96 object-cover rounded-2xl "
                src={img}
                alt={`Slide ${idx + 1}`}
              />
            </div>
          </div>
        ))}
              {/* </div> */}
              {/* <div style={{ width: 225 }}>
                <p>225</p>
              </div>
              <div style={{ width: 175 }}>
                <p>175</p>
              </div> */}
            </Slider>
          </div>
        );
      };
      
       



 

